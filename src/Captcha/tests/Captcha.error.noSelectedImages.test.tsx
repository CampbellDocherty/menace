import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderCaptchaScreen } from './renderCaptchaScreen';

describe('when a user tries to proceed from the captcha page with no images selected', () => {
  beforeEach(() => {
    renderCaptchaScreen();
  });

  test('an error is shown', () => {
    const verifyButton = screen.getByRole('button', { name: 'Verify' });
    fireEvent.click(verifyButton);
    screen.getByText('Please select at least one image');
  });

  test('selecting an image clears any errors', () => {
    const verifyButton = screen.getByRole('button', { name: 'Verify' });
    fireEvent.click(verifyButton);
    screen.getByText('Please select at least one image');

    const image = screen.getByTestId('captcha-image-1');
    fireEvent.click(image);

    const errorText = screen.queryByText('Please select at least one image');
    expect(errorText).toBeNull();
  });
});
