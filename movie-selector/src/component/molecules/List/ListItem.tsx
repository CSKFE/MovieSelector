import { ListItem as SC_ListItem } from "./styles";

type ListItemProps = {
  children: React.ReactNode,
  rows: number
}

export default function ListItem({ children, rows }:ListItemProps) {
  return (
    <SC_ListItem $rows={rows}>
      {children}
    </SC_ListItem>
  )
}