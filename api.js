const router = require("express").Router();
const axios = require("axios");

const API_KEY = process.env.API_KEY;

router.get("/", async (req, res) => {
  const start = req.query.start || 1;
  console.log(start);
  try {
    const apiResponse = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY
        }
      }
    );

    res.json(apiResponse.data);
  } catch (error) {
    return res.sendStatus(error.response ? error.response.status : 500);
  }
});

module.exports = router;
