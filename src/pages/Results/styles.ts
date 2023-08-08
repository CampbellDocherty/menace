import { styled } from 'styled-components';
import { BodyText } from '../../styles';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Result = styled.div`
  display: flex;
`;

export const ResultTitle = styled.h1`
  font-family: 'RoyalAcidOutline';
  font-size: 2.3rem;
  margin: 0;
  margin-bottom: 4px;
  color: aliceblue;
  text-align: left;
  letter-spacing: 2px;
  text-shadow:
    -1px 1px 1px #000,
    1px 1px 1px #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
`;

export const Image = styled.img`
  width: 80px;
  display: inline-block;
  float: left;
  padding-right: 12px;
`;

export const Description = styled(BodyText)`
  font-size: 1.2rem;
  margin: 0 auto;
`;

const BULB_WIDTH = '45px';
const BULB_LEFT_OFFSET = '40px';
const BULB_BORDER_SIZE = '2.5px';

export const Thermometer = styled.div`
  height: 25px;
  background: #3d3d44;
  width: calc(100% - ${BULB_LEFT_OFFSET});
  position: relative;
  border: 2.5px solid #2b2b32;
  border-radius: 20px;
  z-index: 1;
  margin-top: 16px;
  margin-bottom: 48px;
  margin-left: calc(${BULB_LEFT_OFFSET} - ${BULB_BORDER_SIZE});

  &::before,
  &::after {
    position: absolute;
    content: '';
    border-radius: 50%;
  }

  /* Border cover */

  &::before {
    height: 100%;
    width: 50px;
    right: 4px;
    background: #3d3d44;
    z-index: -1;
  }

  /* Bulb */

  &::after {
    transform: translateY(-50%);
    height: ${BULB_WIDTH};
    width: ${BULB_WIDTH};
    background-color: #96ceff;
    left: -${BULB_LEFT_OFFSET};
    border: ${BULB_BORDER_SIZE} solid #2b2b32;
    z-index: -3;
    top: 50%;
  }
`;

export const Temperature = styled.div<{ readonly datavalue: string }>`
  left: 0;
  background: linear-gradient(to left, #ef4a3f, #ff96a4, #96ceff) no-repeat
    bottom;
  height: 100%;
  width: ${(props) => props.datavalue};
  border-radius: 2px;
  background-size: 100% 100%;
  transition: all 0.2s ease-in-out;
  position: absolute;

  &::before {
    position: absolute;
    content: attr(datavalue);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    z-index: 2;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1em;
    line-height: 1;
    transform: translateX(-50%);
    top: 150%;
    right: -3em;
  }
`;
