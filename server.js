const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const AC = require("./controllers/autocomplete"); /* AUTO COMPLETE */
const CC = require("./controllers/currentconditions"); /* CURRENT CONDTIONS */
const FC = require("./controllers/forecasts"); /* FORECASTS */

const app = express();
app.use(bodyParser.json());
app.use(cors());

const ACCUWEATHER_API_KEY = "wNHH1mLHJU9gOAfq7IkayH2UqAF6Znjd";

app.get("/", (req, res) => res.send("hello world"));

app.post("/autocomplete", (req, res) =>
  AC.handleAutoCompleteApi(req, res, ACCUWEATHER_API_KEY)
);

app.post("/currentconditions", (req, res) =>
  CC.handleCurrentConditionsApi(req, res, ACCUWEATHER_API_KEY)
);

app.post("/forecasts", (req, res) =>
  FC.handleForecastsApi(req, res, ACCUWEATHER_API_KEY)
);

app.listen(process.env.PORT || 3000, () => console.log("server listen..."));
