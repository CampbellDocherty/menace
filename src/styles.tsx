import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  max-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const BodyText = styled.p`
  font-size: 20px;
`;

export const IntroText = styled(BodyText)`
  font-size: 20px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const RestartButton = styled.button<{ readonly $teststarted: boolean }>`
  height: 50px;
  width: 50px;
  outline: none;
  background: none;
  background-color: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  position: fixed;
  bottom: 40px;
  left: 20px;
  transform: ${({ $teststarted }) =>
    $teststarted ? 'translateX(0%)' : 'translateX(-150%)'};
  transition: transform 600ms;
`;

export const RestartIcon = styled.img`
  width: 50px;
  height: 50px;
  opacity: 80%;
`;
