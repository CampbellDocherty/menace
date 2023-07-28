/* eslint-disable jsx-a11y/media-has-caption */
import { useContext, useEffect, useRef, useState } from 'react';
import menaceUrl from './menace.mp3';
import coverArt from './cover-art.jpg';
import PlaySvg from '../assets/play.svg';
import PauseSvg from '../assets/pause.svg';
import {
  ArtistInfoContainer,
  AudioContainer,
  AudioControlImage,
  CoverArt,
  SongArtist,
  SongTitle,
} from './styles';
import { Context } from '../context/Pages/Context';
import { Pages } from '../Pages';

export const MusicPlayer = () => {
  const { page } = useContext(Context);
  const testStarted = page !== Pages.HOME;

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
    if (audioRef && audioRef.current) {
      if (testStarted) {
        setIsPaused(false);
        audioRef.current.play();
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
      <AudioContainer $teststarted={testStarted}>
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
        <source src={menaceUrl} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};
