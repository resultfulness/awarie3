<script>
  import { page } from "$app/stores";

  import { _ } from "svelte-i18n";
</script>

<div class="error">
  <h1>{$_("sorry error message")}</h1>
  {$_("status code")}:
  <span>{$page.status}</span>
  <br />
  {$_("error message")}:
  <span>{$page.error?.message}</span>
</div>

<style>
  .error {
    padding: 2rem;
  }

  h1 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  h1 + span {
    font-size: 2rem;
  }

  span ~ span {
    font-size: 1.5rem;
  }
</style>
