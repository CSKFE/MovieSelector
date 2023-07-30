import { AudiWrap } from "./styles";

type AudiProps = {
  audi: string,
  allAudi: string,
}

export default function MovieAudi({ audi, allAudi }: AudiProps) {
  return (
    <AudiWrap>
      <p>
        {'오늘 관객수: '}
        <em>{audi}</em>
        {'명'}
      </p>
      <p>{'누적 관객수: '}
        <em>{allAudi}</em>
        {'명'}
      </p>
    </AudiWrap>
  )
}