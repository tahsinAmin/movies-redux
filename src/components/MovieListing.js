import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/movies/movieSlice";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => (
        <MovieCard key={index} data={show} />
      ))
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper px-[40px] py-[20px]">
      <div className="movie-list my-[20px] mx-[0px] ">
        <h2 className="text-indigo-400 mb-[10px] text-2xl font-regular">
          Movies
        </h2>
        <div className="movie-container grid grid-cols-1 sm:grid-cols-5 gap-[15px]">
          {renderMovies}
        </div>
      </div>
      <div className="show-list my-[20px] mx-[0px] ">
        <h2 className="text-indigo-400 mb-[10px] text-2xl font-regular">
          Shows
        </h2>
        <div className="movie-container grid grid-cols-1 sm:grid-cols-5 gap-[15px]">
          {renderShows}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
