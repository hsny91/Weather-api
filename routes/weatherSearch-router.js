import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/:city", (req, res) => {
  // const locType = 'city'
  // const API_KEY= "0d456f92a8fc4fb2856f92a8fcbfb203"
  // let url_head = 'https://api.weather.com/v3/location/search?query='
  // let location = req.params.city.replace(" ","%20")
  // let url_tail = `&locationType=${locType}&language=en-US&format=json&apiKey=${API_KEY}`
  // let API_URL  = url_head +location+url_tail
  
  const API_KEY = "5fec1a9312514f5ab84aab4ed30a0beb";
  const API_URL = `https://api.weatherbit.io/v2.0/current?&city=${req.params.city}&key=${API_KEY}&include=minutely`;

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

//https://api.weather.com/v3/location/search?query=london&locationType=city&language=en-US&format=json&apiKey=0d456f92a8fc4fb2856f92a8fcbfb203

//https://api.weather.com/v3/wx/forecast/daily/7day?postalKey=81657:US&units=e&language=en-US&format=json&apiKey=0d456f92a8fc4fb2856f92a8fcbfb203


//https://api.weatherbit.io/v2.0/current?&city=London&key=5fec1a9312514f5ab84aab4ed30a0beb&include=minutely