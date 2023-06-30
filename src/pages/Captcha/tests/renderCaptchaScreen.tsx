import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';

export const renderCaptchaScreen = () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Take the test' });
  fireEvent.click(button);
};
