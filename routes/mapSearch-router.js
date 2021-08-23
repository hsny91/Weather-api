import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/:lat/:lng", (req, res) => {
  
  const API_KEY = "0d456f92a8fc4fb2856f92a8fcbfb203";
  const API_URL = `https://api.weather.com/v3/wx/observations/current?geocode=${req.params.lat},${req.params.lng}&format=json&units=e&language=en-US&apiKey=${API_KEY}`;
  //https://api.weather.com/v3/wx/observations/current?geocode=47.04957326766087,-8.293415566440673&format=json&units=e&language=en-US&apiKey=0d456f92a8fc4fb2856f92a8fcbfb203
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.redirect("/error");
    });
});

export default router;

