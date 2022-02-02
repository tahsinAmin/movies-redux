import React from "react";

export default function MovieCard({ data }) {
  return (
    <div className="card-item bg-gray-700 cursor-pointer">
      <div className="card-inner">
        <div className="card-top h-[300px]">
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
    </div>
  );
}
