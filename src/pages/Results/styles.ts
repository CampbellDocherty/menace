import { styled } from 'styled-components';
import { BodyText } from '../../styles';

export const ResultContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
`;

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 70%;
`;

export const ResultTitle = styled.h1`
  font-family: 'RoyalAcidOutline';
  font-size: 2.6rem;
  margin: 0;
  margin-bottom: 4px;
  color: white;
  text-align: right;
  letter-spacing: 2px;
  text-shadow: -1px 1px 1px #000, 1px 1px 1px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

export const Description = styled(BodyText)`
  font-size: 1.2rem;
  margin: 0;
`;

export const Thermometer = styled.div`
  width: 25px;
  background: #3d3d44;
  height: 240px;
  position: relative;
  border: 3px solid #2b2b32;
  border-radius: 20px;
  z-index: 1;
  margin-bottom: 50px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    border-radius: 50%;
  }

  /* Border cover */

  &::before {
    width: 100%;
    height: 50px;
    bottom: 4px;
    background: #3d3d44;
    z-index: -1;
  }

  /* Bulb */

  &::after {
    transform: translateX(-50%);
    width: 45px;
    height: 45px;
    background-color: #3dcadf;
    bottom: -40px;
    border: 3px solid #2b2b32;
    z-index: -3;
    left: 50%;
  }
`;

export const Temperature = styled.div<{ readonly datavalue: string }>`
  bottom: 0;
  background: linear-gradient(red, #3dcadf) no-repeat bottom;
  width: 100%;
  height: ${(props) => props.datavalue};
  border-radius: 2px;
  background-size: 100% 240px;
  transition: all 0.2s ease-in-out;
  position: absolute;

  /* Temperature value - Tooltip */

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
    transform: translateY(50%);
    left: calc(100% + 1em / 1.5);
    top: calc(-2em + 5px * 2);
  }
`;
