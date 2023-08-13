import { styled } from 'styled-components';
import { BodyText } from '../../styles';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
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
