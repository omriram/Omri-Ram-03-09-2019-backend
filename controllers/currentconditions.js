const fetch = require("node-fetch");

const handleCurrentConditionsApi = (req, res, apikey) => {
  const locationKey = req.body.locationKey;

  const data = [
    {
      LocalObservationDateTime: "2019-09-07T16:41:00+03:00",
      EpochTime: 1567863660,
      WeatherText: "Clouds and sun",
      WeatherIcon: 4,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 28,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 82,
          Unit: "F",
          UnitType: 18
        }
      },
      MobileLink:
        "http://m.accuweather.com/en/gr/logos/2285860/current-weather/2285860?lang=en-us",
      Link:
        "http://www.accuweather.com/en/gr/logos/2285860/current-weather/2285860?lang=en-us"
    }
  ];

  /*  fetch(
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
    }); */

  res.json(data);
  console.log("sdf");
};

module.exports = {
  handleCurrentConditionsApi: handleCurrentConditionsApi
};
