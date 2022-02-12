import api from "./api";

export default class CityApi {
  constructor() {
    this.baseRoute = "/city";
  }

  getCities(name) {
    return api.get(`${this.baseRoute}/find?name=${name}`);
  }
}
