import { MoviesTitle } from "./styles"


export default function MovieTitle({ children }: { children: React.ReactNode }) {
  return (
    <MoviesTitle>
      {children}
    </MoviesTitle>
  )
}