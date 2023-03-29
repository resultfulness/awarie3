import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

import * as api from "$lib/api";

export const load: PageServerLoad = async ({ parent }) => {
  const { user } = await parent();
  if (user) throw redirect(307, "/");
};

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const user = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    };

    const body = await api.post_user(user);

    if (body.message) {
      return fail(401, body.message);
    }

    throw redirect(307, "/login");
  },
};
