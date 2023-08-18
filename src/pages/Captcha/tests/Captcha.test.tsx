import { beforeEach, describe, test } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderCaptchaScreen } from './renderCaptchaScreen';
import { selectCaptchaImage } from './selectCaptchaImage';

const selectCorrectCaptchaImages = () => {
  selectCaptchaImage(2);
  selectCaptchaImage(5);
  selectCaptchaImage(6);
};

describe('When the captcha page renders', () => {
  beforeEach(() => {
    renderCaptchaScreen();
  });

  test('it shows the text', () => {
    screen.getByText(
      'Please select all the menaces. Click verify when you have selected them all.',
    );
  });

  test('can proceed to the first question after selecting the right images', () => {
    selectCorrectCaptchaImages();
    const verifyButton = screen.getByRole('button', { name: 'Verify' });
    fireEvent.click(verifyButton);
    screen.getByText('Imagine you', { exact: false });
  });
});
