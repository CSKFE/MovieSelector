import { Title as Title } from "./styles"


export default function MovieTitle({ children }: { children: React.ReactNode }) {
  return (
    <Title>
      {children}
    </Title>
  )
}