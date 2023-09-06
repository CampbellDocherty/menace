import { styled } from 'styled-components';

export const Table = styled.table`
  width: 100%;
`;

export const Heading = styled.th`
  text-align: left;
  padding: 4px;
`;

export const Cell = styled.td`
  text-align: left;
  text-transform: capitalize;
  padding: 4px;
`;

export const Multiplier = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  & > p {
    margin: 0 8px 0 0;
  }
  & > img {
    width: 20px;
    height: 35px;
  }
`;
