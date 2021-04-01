const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./config/dbconfig");

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/api/trains/:departure/:arrival", (req, res) => {
  let depCity = req.params["departure"];
  let arrivalCity = req.params["arrival"];

  pool.query(
    "select * from trains WHERE departure_city = ? && arrival_city = ?",
    [depCity, arrivalCity],
    (err, result, field) => {
      if (err) {
        return console.log(err);
      }
      res.send(result);
    }
  );
});
