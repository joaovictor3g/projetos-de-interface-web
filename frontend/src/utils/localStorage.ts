export const KEY = "@piwfeed:token";

export function getToken() {
  return localStorage.getItem(KEY);
}

export function setToken(token: string) {
  localStorage.setItem(KEY, token);
}
