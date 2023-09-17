/* eslint-disable jsx-a11y/media-has-caption */
import { useContext, useEffect, useRef, useState } from 'react';
import menaceUrl from '../../assets/menace.mp3';
import SpotifyLogo from '../../assets/spotify-logo.png';
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
        playAudio();
      } else {
        audioRef.current.pause();
      }
    }
  }, [testStarted]);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      setIsPaused(audioRef.current?.paused);
    }
  }, [audioRef.current]);

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
    <AudioContainer>
      <ArtistInfoContainer onClick={onClick}>
        <SongTitle>Menace</SongTitle>
        <SongArtist>by 00ab</SongArtist>
        {isPaused ? (
          <AudioControlImage src={PlaySvg} alt="Play button for the music" />
        ) : (
          <AudioControlImage src={PauseSvg} alt="Pause button for the music" />
        )}
      </ArtistInfoContainer>
      <a
        href="https://open.spotify.com/track/5AmpGqzuwZnI968me1wxgJ?si=65dfa5e2764e411d"
        target="_blank"
        rel="noreferrer"
      >
        <CoverArt onClick={onClick} src={SpotifyLogo} alt="spotify loho" />
      </a>
      <audio loop controls={false} ref={audioRef}>
        <source src={menaceUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </AudioContainer>
  );
};
