let searchBtn = document.getElementById("search-btn");
let movieNameRef = document.getElementById("movie-name");
let getMovie = () => {
  console.log("button clicked");
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let titleId = document.getElementById("title");
      titleId.textContent = data.Title;
      let ratingId = document.getElementById("rating");
      ratingId.textContent = data.imdbRating;
      let durationId = document.getElementById("duration");
      durationId.textContent = data.Runtime;
      let genreId = document.getElementById("Genres");
      genreId.textContent = data.Genre;
      let plotId = document.getElementById("plot");
      plotId.textContent = data.Plot;
      let castId = document.getElementById("cast");
      castId.textContent = data.Actors;
      let posterId = document.getElementById("movie-image");
      posterId.src = data.Poster;
    });
};

searchBtn.onclick = getMovie;
