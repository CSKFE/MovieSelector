import styled from 'styled-components';

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #111;
  height: 9rem;
  padding: 0 2rem;
`;
export const HeaderInner = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10.5rem;
  height: 4rem;
  margin-right: 4rem;

  a {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Nav = styled.header`
  ul {
    display: flex;
    gap: 0 4rem;
  }
`;