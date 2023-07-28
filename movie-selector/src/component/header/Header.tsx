import { HeaderComponent, HeaderInner, Nav } from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderComponent>
      <HeaderInner>
        <Nav>
          <ul>
            <li>
              <Link to={'/'}>
                {'메뉴1'}
              </Link>
            </li>
            <li>
              <Link to={'/category'}>
                {'카테고리'}
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                {'메뉴3'}
              </Link>
            </li>
          </ul>
        </Nav>
      </HeaderInner>
    </HeaderComponent>
  )
}