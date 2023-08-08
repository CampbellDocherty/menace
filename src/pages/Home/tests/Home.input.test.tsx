import { test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../App';
import { fillNickname } from './helpers';

test('can input name', () => {
  render(<App />);
  fillNickname();
});

test('shows error if user does not put in name', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Take the test' });
  fireEvent.click(button);
  screen.getByText('Enter a nickname');
});
