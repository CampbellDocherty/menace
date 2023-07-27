import { styled } from 'styled-components';
import { BodyText } from '../../styles';

export const ResultImage = styled.img`
  border: 1px solid black;
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
`;

export const Description = styled(BodyText)`
  width: 85%;
  font-size: 24px;
`;

export const BoxPlot = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 90%;
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
  position: relative;
`;

export const MediaSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 20%;
  border: 1px solid black;
  margin-bottom: 24px;
`;
