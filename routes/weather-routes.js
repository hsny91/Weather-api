import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/:city", (req, res) => {
  const API_KEY = "5fec1a9312514f5ab84aab4ed30a0beb";
  const API_URL = `https://api.weatherbit.io/v2.0/current?&city=${req.params.city}&key=${API_KEY}&include=minutely`;

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      res.redirect("/error");
    });
});

export default router;
