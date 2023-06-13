import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('When the captcha page renders', () => {
  beforeEach(() => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Take the test' });
    fireEvent.click(button);
  });

  test('it shows the text', () => {
    screen.getByText(
      'Please select all the images with a menace in them. Click verify once there are none left.'
    );
  });

  test('clicking verify displays an error when no images are selected', () => {
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
