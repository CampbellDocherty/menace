import { styled, keyframes } from 'styled-components';
import { BodyText } from '../../styles';
import { Button } from '../Scenario/styles';

export const ResultContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 16px;
`;

const fadeIn = keyframes`
from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

export const FadeInText = styled(BodyText)`
  font-size: 1rem;
  margin-bottom: 8px;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
`;

export const FadeInTitle = styled.h1`
  font-family: 'RoyalAcidOutline';
  font-size: 2.8rem;
  margin: 0;
  margin-bottom: 16px;
  color: aliceblue;
  text-align: left;
  letter-spacing: 2px;
  text-shadow:
    -1px 1px 1px #000,
    1px 1px 1px #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;

  opacity: 0;
  animation: ${fadeIn} 3.5s ease-in-out forwards;
`;

export const FadeInButton = styled(Button)`
  animation: ${fadeIn} 3.5s ease-in-out forwards;
`;

export const Thermometer = styled.div`
  height: 25px;
  background: #3d3d44;
  width: 80%;
  position: relative;
  border: 2.5px solid #2b2b32;
  border-radius: 20px;
  z-index: 1;
  margin-top: 16px;
  margin-bottom: 48px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    border-radius: 50%;
  }

  animation: ${fadeIn} 3.5s ease-in-out forwards;
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

  animation: ${fadeIn} 3.5s ease-in-out forwards;
`;
