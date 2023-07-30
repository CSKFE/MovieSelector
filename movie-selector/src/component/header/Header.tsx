import { HeaderComponent, Logo, HeaderInner, Nav } from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderComponent>
      <HeaderInner>
        <Logo>
          <Link to={'/'}>
            <img src="imgs/logo.png" alt={'로고'} />
          </Link>
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link to={'/category'}>
                {'카테고리'}
              </Link>
            </li>
          </ul>
        </Nav>
      </HeaderInner>
    </HeaderComponent>
  )
}