import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "a07c0bfb5afb499da5b9fcc40aff77e6";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token: any) => {
  apiClient.interceptors.request.use(async function (config: any) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;