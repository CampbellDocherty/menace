import { beforeEach, describe, test } from 'vitest';
import { screen } from '@testing-library/react';
import { renderCaptchaScreen } from './renderCaptchaScreen';

describe('When the captcha page renders', () => {
  beforeEach(() => {
    renderCaptchaScreen();
  });

  test('it shows the text', () => {
    screen.getByText(
      'Please select all the images with a menace in them. Click verify once there are none left.'
    );
  });
});
