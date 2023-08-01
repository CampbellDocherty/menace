import { styled } from 'styled-components';
import { BodyText } from '../../styles';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Result = styled.div`
  display: flex;
`;

export const ResultTitle = styled.h1`
  font-family: 'RoyalAcidOutline';
  font-size: 2.3rem;
  margin: 0;
  margin-bottom: 4px;
  color: white;
  text-align: left;
  letter-spacing: 2px;
  text-shadow:
    -1px 1px 1px #000,
    1px 1px 1px #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
`;

export const Description = styled(BodyText)`
  font-size: 1.2rem;
  margin: 0;
`;

export const Thermometer = styled.div`
  height: 25px;
  background: #3d3d44;
  width: calc(100% - 45px);
  position: relative;
  border: 3px solid #2b2b32;
  border-radius: 20px;
  z-index: 1;
  margin: 16px 0px 48px 40px;

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
    height: 45px;
    width: 45px;
    background-color: #3dcadf;
    left: -40px;
    border: 3px solid #2b2b32;
    z-index: -3;
    top: 50%;
  }
`;

export const Temperature = styled.div<{ readonly datavalue: string }>`
  left: 0;
  background: linear-gradient(to left, red, #3dcadf) no-repeat bottom;
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
    top: calc(100% + 1em / 1.5);
    right: calc(-2em + 5px * 2);
  }
`;
