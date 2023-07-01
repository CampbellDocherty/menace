import { render, screen } from '@testing-library/react';
import { beforeEach, describe, test, vi } from 'vitest';
import { AnswersContext } from '../../../context/AnswersContext';
import { Pages } from '../../../Pages';
import Router from '../../../router/Router';
import { MOCK_ANSWERS } from './mockAnswers';

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
