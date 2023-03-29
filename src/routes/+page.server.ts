import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

import * as api from "$lib/api";

export const load: PageServerLoad = async ({ cookies }) => {
  if (!cookies.get("jwt")) {
    throw redirect(307, "login");
  }

  const items = await api.get("api/awarie", cookies.get("jwt"));

  const userLocations = cookies
    .get("userLocations")
    ?.split(".")
    .map((s) => +s);

  const userItems = items.filter((awaria) =>
    userLocations?.includes(awaria.location)
  );

  const places = await api.get("api/places", cookies.get("jwt"));

  return {
    reports: userItems,
    places,
  };
};

export const actions: Actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();

    const awaria = {
      title: data.get("title"),
      description: data.get("description"),
      location: +data.get("locationid") + 1,
    };

    const res = await api.post("api/awarie", cookies.get("jwt"), awaria);

    if (res.message) {
      fail(401, res.message);
    }
  },
};
