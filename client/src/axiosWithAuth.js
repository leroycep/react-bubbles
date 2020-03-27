import axios from "axios";

import { TOKEN_STORAGE_KEY } from "./constants";

export function axiosWithAuth() {
  return axios.create({
    headers: {
      Authorization: JSON.parse(window.localStorage.getItem(TOKEN_STORAGE_KEY))
    }
  });
}
