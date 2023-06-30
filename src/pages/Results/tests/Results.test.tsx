import { render, screen } from '@testing-library/react';
import { beforeEach, describe, test, vi } from 'vitest';
import { AnswersContext } from '../../../context/AnswersContext';
import { Pages } from '../../../Pages';
import Router from '../../../router/Router';

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

describe('When a user arrives at the results page', () => {
  const mockContext = {
    answers: MOCK_ANSWERS(),
    updateAnswers: vi.fn(),
  };

  beforeEach(() => {
    render(
      <AnswersContext.Provider value={mockContext}>
        <Router initialPage={Pages.RESULTS} />
      </AnswersContext.Provider>
    );
  });

  test('shows the result based off of the user answers', () => {
    screen.getByText('You are 100% menace');
  });
});
