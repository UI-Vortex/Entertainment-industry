import React from "react";
import "./movie.css";
import logo from "../../assets/Movie.png";
import profile from "../../assets/profile.png";
import { data } from "../data/Data";
import { useState } from "react";

function Movie() {
  const [movieData, setMovieData] = useState(data);

  return (
    <div className="movie">
      <div className="movie_container">
        <div className="movie_utility">
          <img src={logo} alt="" />

          <div className="movie_icons">
            <i class="fa-solid fa-square"></i>
            <i class="fa-solid fa-film"></i>
            <i class="fa-solid fa-tv"></i>
            <i class="fa-solid fa-bookmark"></i>
          </div>

          <img src={profile} className="profile" alt="Error" />
        </div>
        <div className="movie_info">
          <input className="search" type="text" placeholder="Search movies" />
          <h1 className="movie_trending">Trending</h1>
          <div className="movie_search">
            {movieData.map((item) => {
              return (
                <div key={item}>
                  <img src={item.img} alt="Error" />
                  <p className="desc">{item.description}</p>
                  <h1 className="title">{item.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
