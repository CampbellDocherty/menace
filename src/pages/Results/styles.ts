import { styled } from 'styled-components';

export const ResultImage = styled.img`
  background-color: grey;
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
`;

export const BoxPlot = styled.div`
  margin-top: 24px;
  width: 80%;
  height: 40px;
  outline: 1px solid black;
  position: relative;
`;

export const GoldilocksBox = styled.div`
  position: absolute;
  height: 40px;
  width: 20%;
  background-color: #4bb543;
  left: 50%;
  transform: translateX(-50%);
`;

export const ResultMarker = styled.div<{ readonly result: number }>`
  height: 80px;
  width: ${({ result }) => `${result}%`};
  transform: translate(0, -25%);
  border-right: 2px solid #ff0033;
`;
