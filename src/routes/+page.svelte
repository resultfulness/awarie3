<script lang="ts">
  import Autocomplete from "@smui-extra/autocomplete";
  import Button from "@smui/button";
  import Dialog, { Actions, Content, Title } from "@smui/dialog";
  import Fab, { Icon, Label } from "@smui/fab";
  import Textfield from "@smui/textfield";

  import ToLocations from "$lib/ToLocations.svelte";
  import ReportComponent from "./ReportComponent.svelte";

  import { _ } from "svelte-i18n";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;

  let open = false;

  let title = "";
  let description = "";
  let value = "";

  let places = data.places;
  $: place = 1 + places.map((p) => p.name).indexOf(value) || 0;

  let reports = data.reports;

  for (let i = 0; i < reports.length; i++) {
    const element = reports[i];

    reports[i].placename = places.filter(
      (pl) => pl._id === element.location
    )[0].name;
  }
</script>

<Dialog
  bind:open
  aria-labelledby="make-sure-title"
  aria-describedby="make-sure-desc"
>
  <Title id="make-sure-title">
    {$_("Add new report")}
  </Title>
  <Content id="make-sure-desc">
    <form method="post">
      <Textfield bind:value={title} type="text" required label="Title" />
      <Textfield
        bind:value={description}
        textarea
        required
        label="Description"
      />

      <Autocomplete
        options={places.map((p) => p.name)}
        bind:value
        label="Place"
      />
      <input
        type="text"
        name="locationid"
        bind:value={place}
        style="display:none;"
      />

      <!-- dummy inputs -->
      <input
        type="text"
        name="title"
        bind:value={title}
        style="display:none;"
      />
      <input
        type="text"
        name="description"
        bind:value={description}
        style="display:none;"
      />

      <Button variant="raised">{$_("Add")}</Button>
    </form>
  </Content>
</Dialog>

<div class="fab">
  <Fab color="primary" extended on:click={() => (open = !open)}>
    <Icon class="material-symbols-outlined">add</Icon>
    <Label>{$_("new")}</Label>
  </Fab>
</div>

{#if data.reports.length === 0}
  <ToLocations />
  <p style="color: #aaa; text-align: center; margin-top: 4rem;">
    {$_("There are no reports to show")}
  </p>
{:else}
  <div class="grid">
    {#each reports as report}
      <ReportComponent {report} />
    {/each}
  </div>
{/if}

<style>
  .fab {
    position: fixed;
    z-index: 9999;
    bottom: 0;
    right: 0;
    padding: 1rem;
  }

  .grid {
    max-width: 960px;
    margin: auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 960px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
