import { act, render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import { AnswersContext } from '../../../context/Answers/AnswersContext';
import { Pages } from '../../../Pages';
import Router from '../../../router/Router';
import { MOCK_ANSWERS } from './mockAnswers';
import { Context } from '../../../context/Pages/Context';

const resetAnswersMock = vi.fn();

const setup = (answers: Record<string, number> = {}) => {
  const mockContext = {
    answers: MOCK_ANSWERS(answers),
    updateAnswers: vi.fn(),
    name: '',
    email: '',
    id: '',
    updateId: vi.fn(),
    updateName: vi.fn(),
    updateEmail: vi.fn(),
    reset: resetAnswersMock,
  };

  const mockPagesContext = {
    page: Pages.PERSONALITY,
    restart: vi.fn(),
    proceed: vi.fn(),
    back: vi.fn(),
  };

  render(
    <Context.Provider value={mockPagesContext}>
      <AnswersContext.Provider value={mockContext}>
        <Router />
      </AnswersContext.Provider>
    </Context.Provider>,
  );
};

describe('When a user arrives at the results page it shows their personality type based on the answers', () => {
  test('over 55% shows menace', () => {
    setup({ 1: 0, 2: 0 });
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    screen.getByAltText('Menace');
  });

  test('between 45% and 55% shows just right', () => {
    setup({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    screen.getByAltText('Just right');
  });

  test('less than 45% shows Not Menace', () => {
    setup({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    });
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    screen.getByAltText('Angel');
  });
});
