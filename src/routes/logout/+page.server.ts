import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const actions: Actions = {
  logout: async ({ cookies, locals }) => {
    cookies.delete("jwt", { path: "/" });
    locals.user = null;
  },
};

export const load: PageServerLoad = async ({ cookies, locals }) => {
  cookies.delete("jwt", { path: "/" });
  cookies.delete("userLocations", { path: "/" });
  cookies.delete("userID", { path: "/" });
  locals.user = null;

  throw redirect(307, "/");
};
