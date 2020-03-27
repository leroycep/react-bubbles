import axios from "axios";

import { BASE_API } from "../constants";

export function axiosWithAuth() {
  return axios.create({
    headers: {
      Authorization: window.localStorage.getItem(JSON.parse(TOKEN_STORAGE_KEY))
    }
  });
}
