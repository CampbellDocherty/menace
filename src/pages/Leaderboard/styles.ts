import { styled } from 'styled-components';

export const Table = styled.table`
  width: 100%;
`;

export const Heading = styled.th`
  text-align: center;
  padding: 4px;
  font-weight: 600;
`;

export const Cell = styled.td`
  text-align: center;
  text-transform: capitalize;
  padding: 4px;
`;

export const Multiplier = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  & > p {
    margin: 0 8px 0 0;
  }
  & > img {
    width: 20px;
    height: 35px;
  }
`;

export const ErrorText = styled.p`
  color: #ef4a3f;
  margin: 0;
  margin-right: 16px;
`;
