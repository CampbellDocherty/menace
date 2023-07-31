import { styled } from 'styled-components';

const AVAIL_HEIGHT_OF_VIEWPORT = window.innerHeight;

export const Container = styled.div`
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  min-height: ${AVAIL_HEIGHT_OF_VIEWPORT}px;
  overflow-y: scroll;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: scroll;
`;

export const BodyText = styled.p`
  margin: 0px 0px 16px 0px;
  font-size: 1.2rem;
`;

export const IntroText = styled(BodyText)`
  font-size: 1.1rem;
  padding: 0px 8px;
  margin: 12px 0px;
`;
