import { styled } from 'styled-components';
import { BodyText } from '../../styles';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto; /* Enables scrolling if content overflows */
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ResultTitle = styled.h1`
  font-family: 'RoyalAcidOutline';
  font-size: 2.3rem;
  margin: 0;
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
  width: 50px;
`;

export const Description = styled(BodyText)`
  font-size: 1.2rem;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const ResultTab = styled.div<{ $isleftunderline: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    height: 3px;
    background-color: black;
    width: 130px;
    bottom: 0;
    left: ${({ $isleftunderline }) =>
      $isleftunderline ? '0' : 'calc(100% - 130px)'};

    transition: left 0.5s;
  }
`;

export const Tab = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  background-color: none;
  outline: none;
  background: none;
  font-size: 1.4rem;
  cursor: pointer;
  text-align: right;
  line-height: 1.3em;
  padding: 8px 0px;

  &:first-child {
    text-align: left;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Content = styled.div`
  width: 100%;
`;
