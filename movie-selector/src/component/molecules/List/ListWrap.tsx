import { ListWrap as SC_ListWrap } from "./styles"

type ListWrapType = {
  children?: React.ReactNode,
}

export default function ListWrap({ children }: ListWrapType) {
  return (
    <SC_ListWrap>
      {children}
    </SC_ListWrap>
  )
}