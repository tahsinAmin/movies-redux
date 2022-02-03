import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetail,
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";
import user from "../images/user.png";

export default function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter a valid name");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="header bg-gray-700 containerbg-gray-700 height-[72px] px-[40px] py-[20px] flex items-center justify-between">
      <div className="logo text-white text-2xl font-semibold">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar ">
        <form onSubmit={submitHandler} className="flex justify-center w-3/5">
          <input
            className="p-[5px] outline-none w-45"
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button
            type="submit"
            className="px-[8px] py-[0px] font-semibold cursor-pointer h-[30px]"
          >
            <i className="fa fa-search ml-[10px] text-white"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img className="w-[38px] h-[38px]" src={user} alt="user" />
      </div>
    </div>
  );
}
