import { PosterImage } from "./styles";

type PosterProps = {
  src: string,
  alt: string
}

export default function Poster({ src, alt }: PosterProps) {
  return (
    <PosterImage src={src} alt={alt} />
  )
}