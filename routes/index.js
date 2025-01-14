const express = require("express");
const router = express.Router();
const axios = require("axios");
const MovieModel = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res) => {
  try {
    const movies = await MovieModel.find(); // Fetch all movies from the database
    res.render("movies", { movies }); // Render the movies.hbs view and pass the movies data
  } catch (err) {
    console.error("Error fetching movies:", err);
    res.status(500).send("Error fetching movies");
  }
});

router.get("/movie-detail/:id", async (req, res) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    res.render("movie-detail", { movie });
  } catch (err) {
    console.error(err);
    res.status(500).send("There was an error on the server! Check the console!");
  }
});

module.exports = router;
