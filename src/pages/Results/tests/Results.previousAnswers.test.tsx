import { render, screen } from '@testing-library/react';
import { beforeEach, describe, test } from 'vitest';
import App from '../../../App';
import { Pages } from '../../../Pages';

const MOCK_ANSWERS = () => ({
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
  10: true,
});

describe('When a user arrives at the results page with previously filled in answers', () => {
  beforeEach(() => {
    localStorage.setItem('lastVisitedPage', `${Pages.RESULTS}`);
    localStorage.setItem('previousAnswers', JSON.stringify(MOCK_ANSWERS()));
    render(<App />);
  });

  test('shows their previously inputted answers', () => {
    screen.getByText('Results');
    screen.getByText('You are 100% menace');
  });
});
