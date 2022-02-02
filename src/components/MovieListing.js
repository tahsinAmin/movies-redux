import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movies/movieSlice";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
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
  return (
    <div className="movie-wrapper px-[40px] py-[20px]">
      <div className="movie-list my-[20px] mx-[0px] ">
        <h2 className="text-indigo-400 mb-[10px] text-2xl font-regular">
          Movies
        </h2>
        <div className="movie-container grid grid-cols-1 sm:grid-cols-6 gap-[15px]">
          {renderMovies}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
