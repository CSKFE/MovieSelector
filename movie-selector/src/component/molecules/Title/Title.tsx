import { Title as SC_Title } from "./styles"

type TitleProps = {
  children: React.ReactNode
}

export default function Title ({ children }: TitleProps) {
  return (
    <SC_Title>
      {children}
    </SC_Title>
  )
}