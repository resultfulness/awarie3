import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ locals }) => {
  return {
    user: locals.user && {
      username: locals.user.username,
      email: locals.user.email,
    },
  };
};
