import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovieOrShowDetail } from "../features/movies/movieSlice";
import { getSelectedMovieOrShow } from "../features/movies/movieSlice";

export default function MovieDetail() {
  const data = useSelector(getSelectedMovieOrShow);
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  }, [dispatch, imdbID]); // we want to run thew useEffect whenever we change the id

  return (
    <div className="movie-section text-white flex justify-evenly px-[40px] py-0 font-semibold">
      {Object.keys(data).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="section-left w-10/12">
            <div className="movie-title text-3xl">{data.Title}</div>
            <div className="movie-rating pl-[3px] mt-[20px] text-indigo-300 flex space-x-4">
              <span className="text-xl">
                IMDB Rating <i className="fa fa-star text-orange-300"></i> :{" "}
                {data.imdbRating}
              </span>
              <span className="text-xl">
                IMDB Votes <i className="fa fa-thumbs-up text-white"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span className="text-xl">
                Runtime <i className="fa fa-film text-gray-300"></i> :{" "}
                {data.Runtime}
              </span>
              <span className="text-xl">
                Year <i className="fa fa-calendar text-orange-300"></i> :{" "}
                {data.Year}
              </span>
            </div>
            <div className="movie-plot mt-[20px] leading-7 mb-10">
              {data.Plot}
            </div>
            <div className="movie-info">
              <div>
                <span className=" text-indigo-300">Director: </span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span className=" text-indigo-300">Stars: </span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span className=" text-indigo-300">Genres: </span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span className=" text-indigo-300">Languages: </span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span className=" text-indigo-300">Awards: </span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right ml-[30px] w-2/12">
            <img loading="lazy" src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
}
