import styled from 'styled-components';

export const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`

export const ListItem = styled.li<{ $rows: number }>`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 0.8rem;
  padding: 1rem;
  width: ${props => props.$rows === 3 ? 'calc((100% - 3rem) / 3)' : 'calc((100% - 1.5rem) / 2)'};
  padding: 2rem;
  position: relative;
  cursor: pointer;

  a {
    &::after{
      content: "";
      transition: background-color 0.2s ease-in-out;
    }
  }

  &.active {
    a {
      &::after{ 
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 0.8rem;
      }
    }
  }
`

export const PosterImage = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border: 1px solid #000;
  margin-bottom: 1.5rem;
  border-radius: 0.8rem;
`