import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovieOrShowDetail } from "../features/movies/movieSlice";
import { getSelectedMovieOrShow } from "../features/movies/movieSlice";

export default function MovieDetail() {
  const detail = useSelector(getSelectedMovieOrShow);
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  console.log(detail);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  }, [dispatch, imdbID]); // we want to run thew useEffect whenever we change the id

  return <div>MovieDetail</div>;
}
