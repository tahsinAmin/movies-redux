import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ data }) {
  return (
    <div className="card-item bg-gray-800 cursor-pointer hover:scale-105 hover:transition duration-300">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top h-[400px]">
            <img
              className="w-full h-full bg-cover bg-center"
              src={data.Poster}
              alt={data.Title}
            />
          </div>
          <div className="card-bottom p-[10px]">
            <div className="card-info text-white">
              <h4 className="text-2xl font-semibold mb-[10px]">{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
