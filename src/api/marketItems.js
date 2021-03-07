import axios from "axios";

export const getMarketItems = (setMarketItems) =>
  axios
    // .get("http://localhost:3000/fake-api/marketItems.json")
    .get("https://market-items-app.netlify.app/fake-api/marketItems.json")
    .then((res) => setMarketItems(res.data));
