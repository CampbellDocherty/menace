import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../App';

export const renderCaptchaScreen = () => {
  render(<App />);
  const button = screen.getByAltText('Take the test #1');
  fireEvent.click(button);
};
