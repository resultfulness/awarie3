<script lang="ts">
  import Drawer, {
    AppContent,
    Content,
    Header,
    Scrim,
    Subtitle,
    Title as DrawerTitle,
  } from "@smui/drawer";
  import IconButton from "@smui/icon-button";
  import List, { Graphic, Item, Text, Separator } from "@smui/list";
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import Loading from "$lib/Loading.svelte";

  import "./global.scss";

  import { navigating, page } from "$app/stores";
  import { _ } from "svelte-i18n";
  import { afterNavigate } from "$app/navigation";

  $: routes = [
    {
      href: "/",
      name: $_("reports"),
      iconName: "home",
    },
    {
      href: "/about",
      name: $_("about app"),
      iconName: "info",
    },
    {
      href: "/locations",
      name: $_("locations"),
      iconName: "location_on",
    },
    {
      href: "/me/locations",
      name: $_("my locations"),
      iconName: "person",
    },
  ];

  $: active = $page.route.id;

  let c = "";

  afterNavigate(() => {
    c = document.cookie;
  });

  let sidebarOpen = false;
</script>

<svelte:head>
  <title>Awarie | {$_("page title")}</title>
</svelte:head>

{#if $navigating}
  <Loading />
{/if}
<Drawer variant="modal" bind:open={sidebarOpen}>
  <a href="/" on:click={() => (sidebarOpen = false)}>
    <img src="/logo.svg" alt="logo" class="logo" />
  </a>
  <Header>
    <DrawerTitle>{$_("page title")}</DrawerTitle>
    <Subtitle>{$_("app for emergency reports")}</Subtitle>
  </Header>
  <Content>
    <div
      style="display: flex; flex-direction: column; justify-content: space-between;"
    >
      <List>
        {#each routes as { href, name, iconName }}
          <Item
            {href}
            on:click={() => (sidebarOpen = false)}
            activated={active === href}
          >
            <Graphic class="material-symbols-outlined" aria-hidden="true">
              {iconName}
            </Graphic>
            <Text>{name}</Text>
          </Item>
        {/each}
      </List>
      <Separator />
      <List>
        {#if c.includes("jwt")}
          <Item href="/logout">
            <Graphic class="material-symbols-outlined" aria-hidden="true">
              logout
            </Graphic>
            <Text>Log out</Text>
          </Item>
        {:else}
          <Item
            href="/login"
            on:click={() => (sidebarOpen = false)}
            activated={active === "/login"}
          >
            <Graphic class="material-symbols-outlined" aria-hidden="true">
              login
            </Graphic>
            <Text>Log in</Text>
          </Item>
          <Item
            href="/register"
            on:click={() => (sidebarOpen = false)}
            activated={active === "/register"}
          >
            <Graphic class="material-symbols-outlined" aria-hidden="true">
              person_add
            </Graphic>
            <Text>Register</Text>
          </Item>
        {/if}
      </List>
    </div>
  </Content>
</Drawer>
<Scrim />
<TopAppBar variant="static">
  <Row>
    <Section>
      <IconButton
        class="material-symbols-outlined"
        on:click={() => (sidebarOpen = !sidebarOpen)}
      >
        menu
      </IconButton>
      <Title>{$_("page title")}</Title>
      {#if $page.route.id === "/" || $page.route.id === "/me/locations"}
        <IconButton
          class="material-symbols-outlined"
          style="margin-left: auto;"
          on:click={() => window.location.reload()}
        >
          refresh
        </IconButton>
      {/if}
    </Section>
  </Row>
</TopAppBar>
<AppContent><slot /></AppContent>

<style>
  img.logo {
    display: block;
    padding: 1rem;
  }
</style>
