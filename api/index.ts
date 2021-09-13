import axios from "axios";

export const SpaceAPI = axios.create({
    baseURL: `https://api.le-systeme-solaire.net/`,
  });
