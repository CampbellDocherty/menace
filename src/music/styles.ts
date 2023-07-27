import { styled } from 'styled-components';
import { BodyText } from '../styles';

export const ImageStack = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  margin-left: 12px;
`;

export const CoverArt = styled.img`
  box-shadow: 0px 2px 18px 2px rgba(0, 0, 0, 0.38);
  -webkit-box-shadow: 0px 2px 18px 2px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 2px 18px 2px rgba(0, 0, 0, 0.38);
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const AudioContainer = styled.div<{ readonly $teststarted: boolean }>`
  z-index: 1;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: flex-end;
  transform: ${({ $teststarted }) =>
    $teststarted ? 'translateX(0%)' : 'translateX(150%)'};
  transition: transform 600ms;
`;

export const ArtistInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongTitle = styled(BodyText)`
  font-size: 24px;
  margin: 0;
  margin-bottom: 8px;
`;

export const SongArtist = styled(BodyText)`
  margin: 0;
  text-align: right;
  margin-bottom: 8px;
`;

export const AudioControlImage = styled.img`
  width: 20px;
  opacity: 90%;
  align-self: flex-end;
  opacity: 90%;
`;
