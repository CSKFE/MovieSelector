import { useParams } from "react-router-dom";
import Header from "../../component/header/Header";
import { useEffect } from "react";
import { defaultUrl } from "../../api/api";
import { useState } from "react";
import { MovieDetailType } from "../../util/type";

export default function MovieDetail() {

  const [movieDetail, setMovieDetail] = useState<MovieDetailType>();
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {

    defaultUrl.get('/movie/searchMovieInfo.json',
    {
      params: {
        key: API_KEY,
        movieCd: id
      }
    })
    .then(res => setMovieDetail(res))
    .catch(err => new Error(err))

    return () => {}
  }, [])

  console.log(movieDetail)

  return (
    <>
      <Header />
      {"상세페이지"}
    </>
  )
}