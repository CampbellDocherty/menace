import { useContext } from 'react';
import { Pages } from '../../Pages';
import { MusicPlayer } from './MusicPlayer';
import { Restart } from './Restart';
import { FooterControls } from './styles';
import { Context } from '../../context/Pages/Context';

export const Footer = () => {
  const { page } = useContext(Context);
  const testStarted = page !== Pages.HOME;
  return testStarted ? (
    <FooterControls>
      <Restart />
      <MusicPlayer testStarted={testStarted} />
    </FooterControls>
  ) : (
    <></>
  );
};
