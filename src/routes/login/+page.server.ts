import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

import * as api from "$lib/api.js";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals.user) throw redirect(307, "/");
};

export const actions: Actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();

    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const body = await api.login(user);

    if (body.message) {
      return fail(401, body.message);
    }

    const value = JSON.stringify(body.token).slice(1, -1);
    cookies.set("jwt", value, { path: "/", httpOnly: false });

    cookies.set(
      "userLocations",
      body.user.locations.slice(1, -1).split(",").join("."),
      {
        path: "/",
        httpOnly: false,
      }
    );

    cookies.set("userID", body.user._id, { path: "/", httpOnly: false });

    throw redirect(307, "/");
  },
};
