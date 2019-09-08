const fetch = require("node-fetch");

const handleCurrentConditionsApi = (req, res, apikey) => {
  const locationKey = req.body.locationKey;

  fetch(
    "http://dataservice.accuweather.com/currentconditions/v1/" +
      locationKey +
      "?apikey=" +
      apikey
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
  handleCurrentConditionsApi: handleCurrentConditionsApi
};
