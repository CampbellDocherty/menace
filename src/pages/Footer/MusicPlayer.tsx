/* eslint-disable jsx-a11y/media-has-caption */
import { useContext, useEffect, useRef, useState } from 'react';
import menaceUrl from '../../assets/menace.mp3';
import coverArt from '../../assets/cover-art.jpg';
import PlaySvg from '../../assets/play.svg';
import PauseSvg from '../../assets/pause.svg';
import {
  ArtistInfoContainer,
  AudioContainer,
  AudioControlImage,
  CoverArt,
  SongArtist,
  SongTitle,
} from './styles';
import { Pages } from '../../Pages';
import { Context } from '../../context/Pages/Context';

export const MusicPlayer = ({
  testStarted,
}: {
  readonly testStarted: boolean;
}) => {
  const { page } = useContext(Context);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      if (page === Pages.HOME) {
        audioRef.current.currentTime = 0;
      }
    }
  }, [page]);

  useEffect(() => {
    const playAudio = async () => {
      if (!audioRef || !audioRef.current) {
        return null;
      }
      await audioRef.current.play();
    };

    if (audioRef && audioRef.current) {
      if (testStarted) {
        setIsPaused(false);
        playAudio();
      } else {
        setIsPaused(true);
        audioRef.current.pause();
      }
    }
  }, [testStarted]);

  const onClick = async () => {
    if (audioRef && audioRef.current) {
      if (audioRef.current.paused) {
        setIsPaused(false);
        try {
          await audioRef.current.play();
        } catch (e) {
          console.log('here', e);
        }
      } else {
        setIsPaused(true);
        audioRef.current.pause();
      }
    }
  };

  return (
    <>
      <AudioContainer>
        <ArtistInfoContainer>
          <SongTitle>Menace</SongTitle>
          <SongArtist>by 00ab</SongArtist>
          {isPaused ? (
            <AudioControlImage
              onClick={onClick}
              src={PlaySvg}
              alt="Play button for the music"
            />
          ) : (
            <AudioControlImage
              onClick={onClick}
              src={PauseSvg}
              alt="Pause button for the music"
            />
          )}
        </ArtistInfoContainer>
        <CoverArt onClick={onClick} src={coverArt} alt="cover art for menace" />
      </AudioContainer>
      <audio loop controls={false} ref={audioRef}>
        <source src={menaceUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};
