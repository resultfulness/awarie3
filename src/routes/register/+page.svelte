<script lang="ts">
  import Card from "@smui/card";
  import Textfield from "@smui/textfield";

  import { enhance } from "$app/forms";
  import { _ } from "svelte-i18n";

  import type { ActionData } from "./$types";
  import Button, { Label } from "@smui/button";

  export let form: ActionData;

  let name = "";
  let mail = "";
  let pass = "";
</script>

<svelte:head>
  <title>Awarie | {$_("Sign up")}</title>
</svelte:head>

<div class="card-display">
  <Card padded style="width: min(960px, 100%);">
    <header>
      <h2>{$_("Sign up")}</h2>
      <a href="/login">Have an account?</a>
    </header>

    <form use:enhance method="POST">
      <Textfield bind:value={name} label="Username" type="text" required />
      <Textfield bind:value={mail} label="Email" type="email" required />
      <Textfield bind:value={pass} type="password" required label="Password" />
      <!-- dummy inputs -->
      <input
        type="text"
        bind:value={name}
        name="username"
        style="display:none;"
      />
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
      <Button variant="raised" style="margin-top: 1rem">
        <Label>{$_("Sign up")}</Label>
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
