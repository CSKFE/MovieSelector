import { RankWrap } from "./styles";

type RankPropType = {
  rank: string,
  rankIn: string
}

export default function MovieRank({ rank, rankIn }: RankPropType) {
  return (
    <RankWrap>
      <li>{'순위: '}<em>{rank}</em></li>
      <li>{'전일 대비 변동 순위: '}<em>{rankIn}</em></li>
    </RankWrap>
  )
}