<script lang="ts">
  import Button, { Icon } from "@smui/button";
  import Dialog, { Actions, Content, Title } from "@smui/dialog";
  import List, { Item, Label, Separator } from "@smui/list";
  import Select, { Option } from "@smui/select";

  import { _ } from "svelte-i18n";
  import type { ActionData, PageServerData } from "./$types";

  export let data: PageServerData;
  export let form: ActionData;

  let open = false;
  let currentLocation = {
    name: "Warszawa",
    placeType: "CITY",
    _id: 0,
    parent: 1,
  };

  enum LocationType {
    City = "city",
    District = "district",
    Borough = "borough",
    Street = "street",
    Building = "building",
    Highway = "highway",
    Highway_section = "highway section",
  }

  const allPlaces = data.places;

  $: placesToShow = allPlaces.filter(
    (place) => place.placeType.toLowerCase() === currentLocationType
  );
  let currentLocationType: string = LocationType.District;
</script>

<div class="location-select">
  <Select
    bind:value={currentLocationType}
    name="location_types"
    label={$_("select location type")}
    style="width: 100%;"
    variant="filled"
  >
    {#each Object.values(LocationType) as type}
      <Option value={type}>
        {$_(type)}
      </Option>
    {/each}
  </Select>
</div>
<div>
  <List>
    {#if placesToShow.length > 0}
      {#each placesToShow as place}
        <Button
          style="width:100%; display: flex; padding-inline: 1.5rem; justify-content: space-between;"
          on:click={() => {
            open = !open;
            currentLocation = place;
          }}
        >
          <Label>{place.name}</Label>
          <Icon class="material-symbols-outlined">add</Icon>
        </Button>
        <Separator />
      {/each}
    {:else}
      <Item>
        <Label>{$_("no locations of this type")}</Label>
      </Item>
    {/if}
  </List>
</div>

<Dialog
  bind:open
  aria-labelledby="make-sure-title"
  aria-describedby="make-sure-desc"
>
  <Title id="make-sure-title">
    {$_("add confirmation")}
  </Title>
  <Content id="make-sure-desc">
    <p>
      {$_("you are about to add")}
      {$_("a new location")}
    </p>
    <br />
    <p style="text-align: center;">
      {$_(currentLocation.placeType).toUpperCase()}
      -
      {currentLocation.name.toUpperCase()}
    </p>
    <br />
    {$_("are you sure")}?
  </Content>
  <Actions>
    <Button>
      <Label>{$_("no")}</Label>
    </Button>
    <form method="POST">
      <Button>
        <Label>{$_("yes")}</Label>
      </Button>
      <input
        type="text"
        name="toAdd"
        bind:value={currentLocation._id}
        style="display:none;"
      />
      <input
        type="text"
        name="addParent"
        bind:value={currentLocation.parent}
        style="display:none;"
      />
    </form>
  </Actions>
</Dialog>

<style>
  .location-select {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
</style>
