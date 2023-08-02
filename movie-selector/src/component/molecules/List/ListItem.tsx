import { Link } from "react-router-dom";
import { ListItem as SC_ListItem } from "./styles";
import { useState } from "react";

type ListItemProps = {
  children: React.ReactNode,
  rows: number,
  movieId: string
}

export default function ListItem({ children, rows, movieId }:ListItemProps) {

  const [isHover, setIsHover] = useState<boolean>(false);

  const onHover = () => {
    setIsHover(true)
  }
  const onLeave = () => {
    setIsHover(false);
  }

  return (
    <SC_ListItem onClick={() => console.log(movieId)} onMouseEnter={onHover} onMouseLeave={onLeave} $rows={rows} className={isHover ? "active" : ''}>
      <Link to={`/detail/${movieId}`}>
        {children}
      </Link>
    </SC_ListItem>
  )
}