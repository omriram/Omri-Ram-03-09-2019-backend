const fetch = require("node-fetch");

const handleAutoCompleteApi = (req, res, apikey) => {
  const q = req.body.inputField;
  fetch(
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" +
      apikey +
      "&q=" +
      q
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      console.log("catch");
      res.status(404).send(err);
    });
};

module.exports = {
  handleAutoCompleteApi: handleAutoCompleteApi
};
