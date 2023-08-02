import { useEffect, useMemo, useState } from "react"
import Header from "./component/header/Header";
import type { DailyBoxOfficeList } from "./util/type";
import { defaultUrl } from "./api/api";
import Loader from "./component/molecules/LoaderSpinner/Loader";
import ListWrap from "./component/molecules/List/ListWrap";
import ListItem from "./component/molecules/List/ListItem";
import Poster from "./component/molecules/List/Poster";
import MovieTitle from "./component/molecules/Title/MovieTitle";
import MovieRank from "./component/molecules/MovieInfoWrap/Rank/Rank";
import OpenDate from "./component/molecules/MovieInfoWrap/OpenDate";
import MovieAudi from "./component/molecules/MovieAudi/MovieAudi";
import Title from "./component/molecules/Title/Title";

const getToDate = () => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  let month: number = date.getMonth() + 1;
  let day: number = date.getDate();
  
  if(day === 1) month -= 1;

  return {
    year: `${year}`,
    month: month < 10 ? `0${month}` : `${month}`,
    day: day < 10 ? day === 1 ? getLastDate(year, month) : `0${day - 1}` : `${day - 1}`
  }
}

const getLastDate = (year: number, month: number) => {
  return `${new Date(year, month, 0).getDate()}`;
}

type ToDay = {
  year: string,
  month: string,
  day: string
}

export default function App() {
  const [movieList, setMovieList] = useState<DailyBoxOfficeList<string>[]>([]);
  const getToDay = useMemo<ToDay>(getToDate, []);
  const API_KEY = import.meta.env.VITE_API_KEY;

  
  useEffect(() => {
    defaultUrl.get(`boxoffice/searchDailyBoxOfficeList.json?`,
    {
      params: {
        key: API_KEY,
        targetDt: Object.values(getToDay).join(''),
        itemPerPage: 10,
        repNationCd: 'K'
      }
    })
    .then((res) => {
      setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
    })
    .catch((error) => new Error(error));

    return () => {}
  }, [])

  return (
    <>
      <Header/>
      <main>
        <Title>
          {"일간 박스오피스 순위"}
        </Title>
        {movieList.length > 1 ? 
          <ListWrap>
            {
              movieList.map((e, idx) => {
                return (
                  <ListItem key={idx} rows={3} movieId={e.movieCd}>
                    <Poster src={''} alt={''} />
                    <MovieTitle>{e.movieNm}</MovieTitle>
                    <OpenDate open={e.openDt} />
                    <MovieRank rank={e.rank} rankIn={e.rankInten} />
                    <MovieAudi audi={e.audiCnt} allAudi={e.audiAcc} />
                  </ListItem>
                )
              })
            }
          </ListWrap>
          :
          <Loader />
        }
      </main>
    </>
  )
}
