/* eslint-disable jsx-a11y/media-has-caption */
import { useRef } from 'react';
import sensesUrl from './senses.mp3';
import coverArt from './cover-art.jpg';
import { CoverArt } from './styles';

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const onClick = () => {
    if (audioRef && audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <>
      <CoverArt onClick={onClick} src={coverArt} alt="cover art for menace" />
      <audio loop controls={false} autoPlay ref={audioRef}>
        <source src={sensesUrl} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};
