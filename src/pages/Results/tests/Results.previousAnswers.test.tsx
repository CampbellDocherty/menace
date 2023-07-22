import { render, screen } from '@testing-library/react';
import { beforeEach, describe, test } from 'vitest';
import App from '../../../App';
import { Pages } from '../../../Pages';
import { MOCK_ANSWERS } from './mockAnswers';

describe('When a user arrives at the results page with previously filled in answers', () => {
  beforeEach(() => {
    localStorage.setItem('lastVisitedPage', `${Pages.RESULTS}`);
    localStorage.setItem('previousAnswers', JSON.stringify(MOCK_ANSWERS()));
    render(<App />);
  });

  test('shows their previously inputted answers', () => {
    screen.getByText('Menace');
  });
});
