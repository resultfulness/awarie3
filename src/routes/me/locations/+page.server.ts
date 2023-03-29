import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

import * as api from "$lib/api";

export const load: PageServerLoad = async ({ cookies }) => {
  if (!cookies.get("jwt")) {
    throw redirect(307, "/login");
  }

  const userLocations = cookies
    .get("userLocations")
    ?.split(".")
    .map((s) => +s);

  const places = await api.get("api/places", cookies.get("jwt"));
  const userPlaces = places.filter((place) =>
    userLocations?.includes(place._id)
  );

  cookies.delete("userLocations");
  cookies.set(
    "userLocations",
    JSON.stringify(userPlaces.map((p) => p._id))
      .slice(1, -1)
      .split(",")
      .join("."),
    { path: "/" }
  );

  return {
    userPlaces,
  };
};

export const actions: Actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();

    const toRemove = data.get("toRemove") as number;

    const newUserLocations = cookies
      .get("userLocations")
      ?.split(".")
      .map((s) => +s)
      .filter((n) => n != toRemove);

    const endpoint = `api/users/${cookies.get("userID")}`;

    const res = await api.put(endpoint, cookies.get("jwt"), {
      locations: newUserLocations,
    });

    if (res.message) {
      return fail(401, res.message);
    }

    cookies.set(
      "userLocations",
      JSON.stringify(newUserLocations).slice(1, -1).split(",").join(".") || "",
      { path: "/" }
    );
  },
};
