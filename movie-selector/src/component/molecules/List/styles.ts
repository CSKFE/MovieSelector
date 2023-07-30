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
  padding: 1rem;
`

export const PosterImage = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border: 1px solid #000;
  margin-bottom: 1.5rem;
`