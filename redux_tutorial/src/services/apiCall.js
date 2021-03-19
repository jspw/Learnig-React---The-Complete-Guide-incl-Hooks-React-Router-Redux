import { create } from "apisauce";

const api = create({
  baseURL: "https://api.github.com/",
  headers: { Accept: "application/json" },
});
