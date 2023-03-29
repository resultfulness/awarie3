<script lang="ts">
  import Button, { Label } from "@smui/button";
  import Dialog, { Actions, Content, Title } from "@smui/dialog";
  import IconButton from "@smui/icon-button";
  import List, { Item, Label as ListLabel } from "@smui/list";

  import ToLocations from "$lib/ToLocations.svelte";

  import { _ } from "svelte-i18n";
  import type { ActionData, PageServerData } from "./$types";
  import { enhance } from "$app/forms";

  let open = false;
  let toRemove: number;

  async function fetchPlaceInfo(placeId: number): Promise<[string, string]> {
    const res = await fetch("https://glitterworld.gq/get/place/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        place_id: placeId,
      }),
    });

    const item = await res.json();

    return [item.place.name, item.place.type];
  }

  export let data: PageServerData;
  export let form: ActionData;

  const { userPlaces } = data;
  const userPlaceIDs = userPlaces.map((p) => p._id);
</script>

<header>
  <h2 class="mdc-typography--headline5">{$_("your report locations")}</h2>
</header>
<hr />
<List>
  {#if userPlaces.length === 0}
    <ToLocations />
  {:else}
    {#each userPlaces as place}
      <Item
        style="display: flex; justify-content: space-between; align-items: center;"
        on:click={() => {
          open = true;
          toRemove = place._id;
        }}
      >
        <ListLabel style="padding-left: 1rem;">
          {$_(place.name).toUpperCase()}: {place.placeType}
        </ListLabel>
        <IconButton class="material-symbols-outlined" style="color: red;">
          close
        </IconButton>
      </Item>
    {/each}
  {/if}
</List>
<Dialog
  bind:open
  aria-labelledby="removal-info-title"
  aria-describedby="removal-info-desc"
>
  <Title id="removal-info-title">
    {$_("you are about to remove")}
    {toRemove}
  </Title>
  <Content id="removal-info-desc">{$_("are you sure")}?</Content>
  <Actions>
    <Button>
      <Label>{$_("no")}</Label>
    </Button>
    <form method="POST">
      <Button>
        <Label>{$_("yes")}</Label>
      </Button>
      <!-- dummy input -->
      <input
        type="number"
        bind:value={toRemove}
        name="toRemove"
        style="display:none;"
      />
    </form>
  </Actions>
</Dialog>

<style>
  header {
    padding: 2rem;
  }
</style>
