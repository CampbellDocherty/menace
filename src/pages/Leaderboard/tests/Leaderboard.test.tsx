import { render, screen, within } from '@testing-library/react';
import { beforeEach, describe, test, vi } from 'vitest';
import { AnswersContext } from '../../../context/Answers/AnswersContext';
import { Pages } from '../../../Pages';
import Router from '../../../router/Router';
import { Context } from '../../../context/Pages/Context';

const MOCK_ANSWERS = {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
  10: 1,
};

const setup = () => {
  const mockContext = {
    answers: MOCK_ANSWERS,
    updateAnswers: vi.fn(),
    name: 'Cam',
    id: '',
    updateName: vi.fn(),
    updateId: vi.fn(),
    reset: vi.fn(),
  };

  const mockPagesContext = {
    page: Pages.LEADERBOARD,
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

describe('Leaderboard', () => {
  beforeEach(() => {
    setup();
  });

  test.each`
    header          | value
    ${'Rank'}       | ${'#1'}
    ${'Name'}       | ${'Cam'}
    ${'Score'}      | ${'100%'}
    ${'Multiplier'} | ${'x10'}
  `(
    'shows $header with value of $value',
    ({ header, value }: { header: string; value: string }) => {
      const table = within(screen.getByRole('table'));
      table.getByText(header);
      table.getByText(value);
    },
  );
});
