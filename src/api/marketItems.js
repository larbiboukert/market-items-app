import axios from "axios";

export const getMarketItems = (setMarketItems) =>
  axios
    .get("http://localhost:3000/fake-api/marketItems.json")
    .then((res) => setMarketItems(res.data));
