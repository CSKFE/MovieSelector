export type DailyBoxOfficeList<T extends string> = {
  audiAcc: T,
  audiChange: T,
  audiCnt:T,
  audiInten:T,
  movieCd:T,
  movieNm:T,
  openDt:T,
  rank:T,
  rankInten:T,
  rankOldAndNew:T,
  rnum:T,
  salesAcc:T,
  salesAmt:T,
  salesChange:T,
  salesInten:T,
  salesShare:T,
  scrnCnt:T,
  showCnt:T,
};

type MovieActors<T extends string> = {
  peopleNm: T,
  peopleNmEn: T,
};

type MovieWathGrade = {
  watchGradeNm: string
};

type MovieCompanyPart = "제공" | "배급사" | "제작사";

type MovieCompany = {
  companyCd: string,
  companyNm: string,
  companyNmEn: string, 
  companyPartNm: MovieCompanyPart
};

type MovieDirector = {
  peopleNm: string
};

type MovieGener = "범죄" | "스릴러" | "로맨스" | "드라마" | "액션";
type MovieNation = "한국";

export type MovieDetailType = {
  actors: MovieActors<string>,
  grade: MovieWathGrade,
  company: MovieCompany,
  companyPart: MovieCompanyPart,
  director: MovieDirector,
  genre: MovieGener,
  nation: MovieNation,
  code: string,
  name: string,
  enName: string,
  openDate: string,
  openState: string,
}

