import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

import * as api from "$lib/api";

export const load: PageServerLoad = async ({ cookies }) => {
  if (!cookies.get("jwt")) {
    throw redirect(307, "login");
  }

  const places = await api.get("api/places", cookies.get("jwt"));

  return {
    places,
  };
};

export const actions: Actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();

    let toAdd = +data.get("toAdd");
    let addParent = +data.get("addParent");

    let allToAdd: number[] = [];

    allToAdd.push(toAdd);

    while (addParent !== 0) {
      let newPlace = await api.get(
        `api/places/${addParent}`,
        cookies.get("jwt")
      );
      allToAdd.push(newPlace._id);
      addParent = newPlace.parent;
    }

    const newLocations = [
      ...new Set([
        ...allToAdd,
        ...cookies
          .get("userLocations")
          ?.split(".")
          .map((n) => +n),
      ]),
    ];

    cookies.delete("userLocations");
    cookies.set(
      "userLocations",
      JSON.stringify(newLocations).slice(1, -1).split(",").join("."),
      { path: "/" }
    );

    api.put(`api/users/${cookies.get("userID")}`, cookies.get("jwt"), {
      locations: newLocations,
    });
  },
};
