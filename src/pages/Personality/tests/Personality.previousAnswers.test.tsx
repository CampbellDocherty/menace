import { act, render, screen } from '@testing-library/react';
import { beforeEach, describe, test, vi } from 'vitest';
import App from '../../../App';
import { Pages } from '../../../Pages';
import { MOCK_ANSWERS } from './mockAnswers';

describe('When a user arrives at the results page with previously filled in answers', () => {
  beforeEach(() => {
    localStorage.setItem('lastVisitedPage', `${Pages.PERSONALITY}`);
    localStorage.setItem(
      'previousAnswers',
      JSON.stringify(
        MOCK_ANSWERS({
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
        }),
      ),
    );
    render(<App />);
  });

  test('shows their previously inputted answers', () => {
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    screen.getByText('Angel');
  });
});
