import { describe, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('When the captcha page renders', () => {
  test('it shows the text', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Take the test' });
    fireEvent.click(button);
    screen.getByText(
      'Please select all the images with a menace in them. Click verify once there are none left.'
    );
  });
});
