import { styled } from 'styled-components';
import { BodyText } from '../styles';

export const CoverArt = styled.img`
  width: 90px;
  height: 90px;
  box-shadow: 0px 2px 18px 2px rgba(0, 0, 0, 0.38);
  -webkit-box-shadow: 0px 2px 18px 2px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 2px 18px 2px rgba(0, 0, 0, 0.38);
  cursor: pointer;
  margin-left: 12px;
`;

export const AudioContainer = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: flex-end;
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
`;
