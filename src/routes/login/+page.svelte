<script lang="ts">
  import Button, { Label } from "@smui/button";
  import Textfield from "@smui/textfield";

  import { _ } from "svelte-i18n";
  import { enhance } from "$app/forms";

  import type { ActionData } from "./$types";
  import Card from "@smui/card";
  export let form: ActionData;

  let pass = "";
  let mail = "";
</script>

<svelte:head>
  <title>Awarie | {$_("Log in")}</title>
</svelte:head>

<div class="card-display">
  <Card padded style="width: min(960px, 100%);">
    <header>
      <h2>{$_("Log in")}</h2>
      <a href="/register">Need an account?</a>
    </header>

    <form use:enhance method="POST">
      <Textfield bind:value={mail} label="Email" type="email" required />
      <Textfield bind:value={pass} type="password" required label="Password" />
      <!-- dummy inputs -->
      <input
        type="email"
        bind:value={mail}
        name="email"
        style="display:none;"
      />
      <input
        type="password"
        bind:value={pass}
        name="password"
        style="display:none;"
      />
      <Button variant="raised" type="submit" style="margin-top: 1rem">
        <Label>
          {$_("Log in")}
        </Label>
      </Button>
    </form>
  </Card>
</div>

<style>
  .card-display {
    margin: 1rem;
    display: grid;
    place-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  @media (min-width: 960px) {
    form {
      gap: 1rem;
    }
  }

  header {
    display: flex;
  }

  header a {
    margin-left: auto;
  }
</style>
