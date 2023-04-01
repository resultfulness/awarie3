<script lang="ts">
  import Card, { Content } from "@smui/card";

  import { _ } from "svelte-i18n";
</script>

<div class="card-display">
  <Card padded style="width: min(960px, 100%);">
    <Content>
      <header>
        <img src="/logo.svg" alt="logo" class="logo" />
        <div class="title">
          <h1>{$_("about app")}</h1>
          <p>Awarie v0.1</p>
        </div>
      </header>
      <hr />

      <main>
        <a href="https://github.com/resultfulness/awarie3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
            />
          </svg>
          {$_("source code")}
        </a>

        <a href="https://github.com/sveltejs/kit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 32 32"
          >
            <path
              d="M26.1 5.7C23.5 2 18.4.9 14.7 3.2L8.2 7.4c-1.8 1.1-3 2.9-3.4 5c-.3 1.7 0 3.5.8 5.1c-.6.8-.9 1.8-1.1 2.8c-.4 2.1.1 4.3 1.4 6c2.6 3.7 7.7 4.8 11.4 2.5l6.5-4.2c1.8-1.1 3-2.9 3.4-5c.3-1.7 0-3.5-.8-5.1c.6-.8.9-1.8 1.1-2.8c.4-2.1-.1-4.3-1.4-6zM24.3 11c0 .2-.1.4-.2.6l-.1.4l-.3-.2c-.8-.6-1.6-1-2.6-1.3l-.2-.1v-.2c0-.3-.1-.7-.3-1c-.4-.5-1-.8-1.7-.6c-.1 0-.3.1-.4.2L12 12.9c-.3.2-.5.5-.6.9c-.1.4 0 .8.2 1.1c.4.5 1 .8 1.7.6c.1 0 .3-.1.4-.2l2.5-1.6c.4-.3.9-.5 1.3-.6c2.1-.5 4.3.3 5.6 2.1c.7 1 1 2.4.8 3.6c-.2 1.2-1 2.3-2 3L15.4 26c-.4.3-.9.5-1.3.6c-2.1.5-4.3-.3-5.6-2.1c-.7-1-1-2.4-.8-3.6c0-.2.1-.4.2-.6L8 20l.3.2c.8.6 1.6 1 2.6 1.3l.2.1v.2c0 .3.1.7.3 1c.4.5 1 .8 1.7.6c.1 0 .3-.1.4-.2L20 19c.3-.2.5-.5.6-.9c.1-.4 0-.8-.2-1.1c-.4-.5-1-.8-1.7-.6c-.1 0-.3.1-.4.2l-2.5 1.6c-.4.3-.9.5-1.3.6c-2.1.5-4.3-.3-5.6-2.1c-.8-1-1-2.4-.8-3.6c.2-1.2 1-2.3 2-3l6.5-4.2c.4-.3.9-.5 1.3-.6c2.1-.5 4.3.3 5.6 2.1c.7 1.1 1 2.4.8 3.6z"
            />
          </svg>
          sveltekit
        </a>

        <a href="https://github.com/hperrin/svelte-material-ui">
          <svg
            width="64"
            height="64"
            viewBox="0 0 7.6963348 10.307724"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="layer1" transform="translate(-44.292905,-72.659666)">
              <text
                xml:space="preserve"
                transform="scale(0.26458333)"
                id="text111"
                style="font-size:53.3333px;font-family:Roboto;-inkscape-font-specification:Roboto;white-space:pre;shape-inside:url(#rect113)"
              >
                <tspan x="165.60938" y="313.05669" id="tspan304">
                  <tspan style="font-weight:bold" id="tspan302">S</tspan>
                </tspan>
              </text>
            </g>
          </svg>
          svelte material ui
        </a>

        <a href="https://github.com/kaisermann/svelte-i18n">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M20.58 19.37L17.59 11.01C17.38 10.46 16.91 10.12 16.37 10.12C15.83 10.12 15.37 10.46 15.14 11.03L12.16 19.37C12.02 19.76 12.22 20.19 12.61 20.33C13 20.47 13.43 20.27 13.57 19.88L14.19 18.15H18.54L19.16 19.88C19.27 20.19 19.56 20.38 19.87 20.38C19.95 20.38 20.04 20.37 20.12 20.34C20.51 20.2 20.71 19.77 20.57 19.38L20.58 19.37ZM14.74 16.64L16.38 12.05L18.02 16.64H14.74ZM12.19 7.85C9.92999 11.42 7.89 13.58 5.41 15.02C5.29 15.09 5.16 15.12 5.04 15.12C4.78 15.12 4.53 14.99 4.39 14.75C4.18 14.39 4.3 13.93 4.66 13.73C6.75999 12.51 8.48 10.76 10.41 7.86H4.12C3.71 7.86 3.37 7.52 3.37 7.11C3.37 6.7 3.71 6.36 4.12 6.36H7.87V4.38C7.87 3.97 8.21 3.63 8.62 3.63C9.02999 3.63 9.37 3.97 9.37 4.38V6.36H13.12C13.53 6.36 13.87 6.7 13.87 7.11C13.87 7.52 13.53 7.86 13.12 7.86H12.18L12.19 7.85ZM12.23 15.12C12.1 15.12 11.97 15.09 11.85 15.02C11.2 14.64 10.57 14.22 9.97999 13.78C9.64999 13.53 9.58 13.06 9.83 12.73C10.08 12.4 10.55 12.33 10.88 12.58C11.42 12.99 12.01 13.37 12.61 13.72C12.97 13.93 13.09 14.39 12.88 14.75C12.74 14.99 12.49 15.12 12.23 15.12Z"
              />
            </g>
          </svg>
          svelte-i18n
        </a>
      </main>
    </Content>
  </Card>
</div>

<style lang="scss">
  @use "sass:color";
  @use "@material/theme/color-palette" as *;

  .card-display {
    margin: 1rem;
    display: grid;
    place-items: center;
  }

  header {
    img.logo {
      width: 100%;
    }

    @media (min-width: 550px) {
      display: flex;
      gap: 1rem;
      justify-content: center;

      img.logo {
        width: 64px;
      }
    }
  }

  main {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    > a {
      background-color: lighten(color.adjust($grey-900, $blue: +4), 4);
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 2rem;
      align-items: center;
      text-decoration: none;
      color: $grey-100;
      border-bottom: 1px solid $grey-100;

      svg {
        fill: $grey-100;
      }

      &:hover,
      &:focus {
        background-color: lighten(color.adjust($grey-900, $blue: +4), 8);
      }
    }

    @media (min-width: 550px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 960px) {
      max-width: 960px;
      margin-inline: auto;
    }

    @media (prefers-color-scheme: light) {
      > a {
        background-color: darken(white, 4);
        color: black;
        border-bottom: 1px solid black;

        svg {
          fill: black;
        }

        &:hover,
        &:focus {
          background-color: darken(white, 8);
        }
      }
    }
  }
</style>
