import { styled } from 'styled-components';
import { BodyText } from '../styles';

export const CoverArt = styled.img`
  box-shadow: 0px 2px 18px 2px rgba(0, 0, 0, 0.38);
  -webkit-box-shadow: 0px 2px 18px 2px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 2px 18px 2px rgba(0, 0, 0, 0.38);
  cursor: pointer;
  height: 100%;
  margin-left: 12px;
`;

export const AudioContainer = styled.div<{ readonly $teststarted: boolean }>`
  z-index: 1;
  position: fixed;
  height: 90px;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: flex-end;
  transform: ${({ $teststarted }) =>
    $teststarted ? 'translateX(0%)' : 'translateX(150%)'};
  transition: transform 600ms;
  width: 100%;
`;

export const ArtistInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

export const SongTitle = styled(BodyText)`
  font-size: 24px;
  margin: 0;
  margin-bottom: 4px;
`;

export const SongArtist = styled(BodyText)`
  margin: 0;
  text-align: right;
  margin-bottom: 4px;
`;

export const AudioControlImage = styled.img`
  width: 20px;
  opacity: 90%;
  align-self: flex-end;
  opacity: 90%;
  cursor: pointer;
`;
