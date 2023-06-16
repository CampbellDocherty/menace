import { beforeEach, describe, test } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderCaptchaScreen } from './renderCaptchaScreen';

const selectCaptchaImage = (imagePosition: number) => {
  const captchaImage = screen.getByTestId(`captcha-image-${imagePosition}`);
  fireEvent.click(captchaImage);
};

describe('When the user selects the wrong images', () => {
  beforeEach(() => {
    renderCaptchaScreen();
  });

  test('shows an error', () => {
    selectCaptchaImage(1);
    const verifyButton = screen.getByRole('button', { name: 'Verify' });
    fireEvent.click(verifyButton);
    screen.getByText("It looks like you didn't select the right images :(");
  });
});
