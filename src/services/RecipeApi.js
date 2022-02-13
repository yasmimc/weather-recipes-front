import api from "./api";

export default class RecipeApi {
  constructor() {
    this.baseRoute = "/recipe";
  }

  getRecipeByWeather(coord) {
    return api.get(`${this.baseRoute}/?lat=${coord.lat}&lon=${coord.lon}`);
  }
}
