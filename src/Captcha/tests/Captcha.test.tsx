import { beforeEach, describe, test } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderCaptchaScreen } from './renderCaptchaScreen';
import { selectCaptchaImage } from './selectCaptchaImage';

describe('When the captcha page renders', () => {
  beforeEach(() => {
    renderCaptchaScreen();
  });

  test('it shows the text', () => {
    screen.getByText(
      'Please select all the images with a menace in them. Click verify once there are none left.'
    );
  });

  test('can proceed to the first question after selecting the right images', () => {
    selectCaptchaImage(2);
    selectCaptchaImage(5);
    selectCaptchaImage(6);
    const verifyButton = screen.getByRole('button', { name: 'Verify' });
    fireEvent.click(verifyButton);
    screen.getByText('Scenario 1');
  });
});
