import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../App';
import { fillNickname } from '../../Home/tests/helpers';

export const renderCaptchaScreen = () => {
  render(<App />);
  fillNickname();
  const button = screen.getByRole('button', { name: 'Take the test' });
  fireEvent.click(button);
};
