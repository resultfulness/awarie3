import { error } from "@sveltejs/kit";

const api_url = "https://awarie-express.vercel.app";

async function send(
  method: string,
  path: string,
  token?: string,
  data?: object
) {
  const opts: RequestInit = { method, headers: {} };

  if (data) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(data);
  }

  if (token) {
    opts.headers["Authorization"] = `Token ${token}`;
  }

  const response = await fetch(`${api_url}/${path}`, opts);

  if (response.ok || response.status === 422) {
    const text = await response.text();
    return text ? JSON.parse(text) : {};
  }

  throw error(response.status);
}

export function get(path: string, token: string) {
  return send("GET", path, token);
}

export function del(path: string, token: string) {
  return send("DELETE", path, token);
}

export function post(path: string, token: string, data: object) {
  return send("POST", path, token, data);
}

export function post_user(user_data: object) {
  return send("POST", "api/users", undefined, user_data);
}

export function login(login_data: object) {
  return send("POST", "login", undefined, login_data);
}

export function put(path: string, token: string, data: object) {
  return send("PUT", path, token, data);
}
