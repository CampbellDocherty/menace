import { describe, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../App';
import { fillNickname } from './helpers';

describe('When the app renders', () => {
  test('it shows the text', () => {
    render(<App />);
    screen.getByText('Are you a menace?');
    screen.getByText('Is that a bad thing?', { exact: false });
    screen.getByText('This is in no way medical advice.', { exact: false });
  });

  test('a user can start the personality test', () => {
    render(<App />);
    fillNickname();
    const button = screen.getByRole('button', { name: 'Take the test' });
    fireEvent.click(button);
    screen.getByText(
      'Please select all the menaces. Click verify when you have selected them all.',
    );
  });
});
