<script>
  import Button, { Icon, Label } from "@smui/button";

  import { _ } from "svelte-i18n";
</script>

<div class="no-reports">
  <Button href="/locations">
    <Icon class="material-symbols-outlined">location_on</Icon>
    <Label>{$_("click here to choose locations")}</Label>
  </Button>
</div>

<style>
  .no-reports {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
