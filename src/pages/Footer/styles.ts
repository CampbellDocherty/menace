import { styled } from 'styled-components';
import { BodyText } from '../../styles';

export const FooterControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: fit-content;
  flex: 1;
  margin-top: 16px;
`;

export const CoverArt = styled.img`
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.38);
  -webkit-box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.38);
  cursor: pointer;
  height: 100%;
  margin-left: 12px;
`;

export const AudioContainer = styled.div`
  z-index: 1;
  height: 90px;
  display: flex;
  justify-content: flex-end;
  transition: display 600ms;
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

export const RestartButton = styled.button`
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
  transition: transform 600ms;
`;

export const RestartIcon = styled.img`
  width: 50px;
  height: 50px;
`;
