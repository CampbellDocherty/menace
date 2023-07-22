import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import { AnswersContext } from '../../../context/AnswersContext';
import { Pages } from '../../../Pages';
import Router from '../../../router/Router';
import { MOCK_ANSWERS } from './mockAnswers';

const setup = (answers: Record<string, boolean> = {}) => {
  const mockContext = {
    answers: MOCK_ANSWERS(answers),
    updateAnswers: vi.fn(),
  };

  render(
    <AnswersContext.Provider value={mockContext}>
      <Router initialPage={Pages.RESULTS} />
    </AnswersContext.Provider>
  );
};

describe('When a user arrives at the results page it shows their personality based on the answers', () => {
  test('over 60% shows menace', () => {
    setup();
    screen.getByText('Menace');
  });
  test('between 40% and 60% shows just right', () => {
    setup({ 1: false, 2: false, 3: false, 4: false });
    screen.getByText('Just Right');
  });
  test('less than 40% shows Not Menace', () => {
    setup({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
    });
    screen.getByText('Not a Menace');
  });
});
