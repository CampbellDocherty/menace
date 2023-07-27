import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { Pages } from '../../../Pages';
import Router from '../../../router/Router';
import { AnswersContext } from '../AnswersContext';
import { defaultAnswers } from '../defaultAnswers';
import { Restart } from '../../../Restart';
import { Context } from '../../Pages/Context';

describe('Answers context', () => {
  const mockAnswersContext = {
    answers: defaultAnswers,
    updateAnswers: vi.fn(),
    reset: vi.fn(),
  };

  const mockPagesContext = {
    page: Pages.SCENARIO_ONE,
    restart: vi.fn(),
    proceed: vi.fn(),
    back: vi.fn(),
  };

  beforeEach(() => {
    render(
      <Context.Provider value={mockPagesContext}>
        <AnswersContext.Provider value={mockAnswersContext}>
          <Router />
          <Restart />
        </AnswersContext.Provider>
      </Context.Provider>
    );
  });

  test('updates the context when a user answers a question', () => {
    const button = screen.getByRole('button', { name: 'Just a friend' });
    fireEvent.click(button);
    expect(mockAnswersContext.updateAnswers).toHaveBeenCalledTimes(1);
    expect(mockAnswersContext.updateAnswers).toHaveBeenCalledWith(1, 1);
  });

  test('updates the context when a user clicks reset', () => {
    const button = screen.getByAltText('restart the test');
    fireEvent.click(button);
    expect(mockAnswersContext.reset).toHaveBeenCalledTimes(1);
  });
});
