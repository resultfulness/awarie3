import type { Handle } from "@sveltejs/kit";
import { locale } from "svelte-i18n";

export const handle: Handle = async ({ event, resolve }) => {
  const lang = event.request.headers.get("accept-language")?.split(",")[0];
  if (lang) {
    locale.set(lang);
  }

  const jwt = event.cookies.get("jwt");
  event.locals.user = jwt ? jwt : null;

  return resolve(event);
};
