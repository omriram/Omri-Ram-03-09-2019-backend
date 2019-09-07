const fetch = require("node-fetch");

const handleForecastsApi = (req, res, apikey) => {
  const locationKey = req.body.locationKey;

  const data = {
    Headline: {
      EffectiveDate: "2019-09-07T08:00:00+03:00",
      EffectiveEpochDate: 1567832400,
      Severity: 4,
      Text: "Pleasant this weekend",
      Category: "",
      EndDate: null,
      EndEpochDate: null,
      MobileLink:
        "http://m.accuweather.com/en/gr/logos/2285860/extended-weather-forecast/2285860?lang=en-us",
      Link:
        "http://www.accuweather.com/en/gr/logos/2285860/daily-weather-forecast/2285860?lang=en-us"
    },
    DailyForecasts: [
      {
        Date: "2019-09-06T07:00:00+03:00",
        EpochDate: 1567742400,
        Temperature: {
          Minimum: {
            Value: 64.0,
            Unit: "F",
            UnitType: 18
          },
          Maximum: {
            Value: 84.0,
            Unit: "F",
            UnitType: 18
          }
        },
        Day: {
          Icon: 1,
          IconPhrase: "Sunny",
          HasPrecipitation: false
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: false
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://m.accuweather.com/en/gr/logos/2285860/daily-weather-forecast/2285860?day=1&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gr/logos/2285860/daily-weather-forecast/2285860?day=1&lang=en-us"
      },
      {
        Date: "2019-09-07T07:00:00+03:00",
        EpochDate: 1567828800,
        Temperature: {
          Minimum: {
            Value: 65.0,
            Unit: "F",
            UnitType: 18
          },
          Maximum: {
            Value: 84.0,
            Unit: "F",
            UnitType: 18
          }
        },
        Day: {
          Icon: 3,
          IconPhrase: "Partly sunny",
          HasPrecipitation: false
        },
        Night: {
          Icon: 33,
          IconPhrase: "Clear",
          HasPrecipitation: false
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://m.accuweather.com/en/gr/logos/2285860/daily-weather-forecast/2285860?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gr/logos/2285860/daily-weather-forecast/2285860?day=2&lang=en-us"
      },
      {
        Date: "2019-09-08T07:00:00+03:00",
        EpochDate: 1567915200,
        Temperature: {
          Minimum: {
            Value: 65.0,
            Unit: "F",
            UnitType: 18
          },
          Maximum: {
            Value: 84.0,
            Unit: "F",
            UnitType: 18
          }
        },
        Day: {
          Icon: 2,
          IconPhrase: "Mostly sunny",
          HasPrecipitation: false
        },
        Night: {
          Icon: 34,
          IconPhrase: "Mostly clear",
          HasPrecipitation: false
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://m.accuweather.com/en/gr/logos/2285860/daily-weather-forecast/2285860?day=3&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gr/logos/2285860/daily-weather-forecast/2285860?day=3&lang=en-us"
      },
      {
        Date: "2019-09-09T07:00:00+03:00",
        EpochDate: 1568001600,
        Temperature: {
          Minimum: {
            Value: 64.0,
            Unit: "F",
            UnitType: 18
          },
          Maximum: {
            Value: 84.0,
            Unit: "F",
            UnitType: 18
          }
        },
        Day: {
          Icon: 2,
          IconPhrase: "Mostly sunny",
          HasPrecipitation: false
        },
        Night: {
          Icon: 33,
          IconPhrase: "Clear",
          HasPrecipitation: false
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://m.accuweather.com/en/gr/logos/2285860/daily-weather-forecast/2285860?day=4&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gr/logos/2285860/daily-weather-forecast/2285860?day=4&lang=en-us"
      },
      {
        Date: "2019-09-10T07:00:00+03:00",
        EpochDate: 1568088000,
        Temperature: {
          Minimum: {
            Value: 66.0,
            Unit: "F",
            UnitType: 18
          },
          Maximum: {
            Value: 84.0,
            Unit: "F",
            UnitType: 18
          }
        },
        Day: {
          Icon: 4,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false
        },
        Night: {
          Icon: 33,
          IconPhrase: "Clear",
          HasPrecipitation: false
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://m.accuweather.com/en/gr/logos/2285860/daily-weather-forecast/2285860?day=5&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gr/logos/2285860/daily-weather-forecast/2285860?day=5&lang=en-us"
      }
    ]
  };

  res.json(data);

  /*   fetch(
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
    }); */
};

module.exports = {
  handleForecastsApi: handleForecastsApi
};
