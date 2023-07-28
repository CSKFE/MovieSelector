import { useEffect, useMemo, useState } from "react"
import axios from "axios"
import { BASE_URL } from "./util/url";
import Header from "./component/header/Header";
const getToDate = ():string => {
  const toDay = new Date();
  return String(toDay.getMonth()).length === 1 ? `${toDay.getFullYear()}0${toDay.getMonth() + 1}${toDay.getDate() - 1}` : `${toDay.getFullYear()}${toDay.getMonth() + 1}${toDay.getDate() - 1}`;
}

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const getToDay = useMemo<string>(getToDate, []);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios({
      method: "GET",
      url: `${BASE_URL}boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${getToDay}&itemPerPage=20&repNationCd=K`,
    })
    .then((res) => {
      console.log(res)
      setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
    })
    .catch((error) => new Error(error));

    return () => {}
  }, [])

  console.log(movieList)

  return (
    <>
      <Header/>
      <ul style={{display: "flex", flexDirection: "column", width: "100%", height: "500px"}}>
        {movieList.length > 1 && movieList.map((e, idx) => {
          return (
            <li key={idx} style={{display: "flex", flexDirection: "column", paddingBottom: "5px", border: "1px solid #666"}}>
              <h3>{e.movieNm}</h3>
            </li>
          )
        })}
      </ul>
    </>
  )
}
