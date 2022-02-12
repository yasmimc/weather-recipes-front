import CityApi from "../services/CityApi";

export default function useApi() {
  return {
    city: new CityApi(),
  };
}
