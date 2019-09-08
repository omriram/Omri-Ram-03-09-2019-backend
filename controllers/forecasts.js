const fetch = require("node-fetch");

const handleForecastsApi = (req, res, apikey) => {
  const locationKey = req.body.locationKey;

  fetch(
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
      locationKey +
      "?apikey=" +
      apikey +
      "&metric=true"
  )
    .then(res => res.json())
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(404).send(err);
    });
};

module.exports = {
  handleForecastsApi: handleForecastsApi
};
