import { useEffect, useMemo, useState } from "react"
import Header from "./component/header/Header";
import type { DailyBoxOfficeList } from "./util/type";
import { defaultInstance } from "./api/api";
import Loader from "./component/molecules/LoaderSpinner/Loader";
import ListWrap from "./component/molecules/List/ListWrap";
import ListItem from "./component/molecules/List/ListItem";
import Poster from "./component/molecules/List/Poster";
import MovieTitle from "./component/molecules/Title/MovieTitle";
import MovieRank from "./component/molecules/MovieInfoWrap/Rank/Rank";
import OpenDate from "./component/molecules/MovieInfoWrap/OpenDate";
import MovieAudi from "./component/molecules/MovieAudi/MovieAudi";
import Skeleton from "react-loading-skeleton";

const getToDate = () => {
  const toDay = new Date();
  return String(toDay.getMonth()).length === 1 ? `${toDay.getFullYear()}0${toDay.getMonth() + 1}${toDay.getDate() - 1}` : `${toDay.getFullYear()}${toDay.getMonth() + 1}${toDay.getDate() - 1}`;
}

export default function App() {
  const [movieList, setMovieList] = useState<DailyBoxOfficeList<string>[]>([]);
  const getToDay = useMemo(getToDate, []);
  const API_KEY = import.meta.env.VITE_API_KEY;


  useEffect(() => {
    defaultInstance.get(`boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${getToDay}&itemPerPage=20&repNationCd=K`,)
    .then((res) => {
      console.log(res)
      setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
    })
    .catch((error) => new Error(error));

    return () => {}
  }, [])



  return (
    <>
      <Header/>
      <main>
        {movieList.length > 1 ? 
          <ListWrap>
            {
              movieList.map((e, idx) => {
                return (
                  <ListItem key={idx} rows={3}>
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
          <Skeleton count={20} />
        }
      </main>
    </>
  )
}
