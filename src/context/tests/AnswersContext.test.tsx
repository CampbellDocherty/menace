import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { Pages } from '../../Pages';
import Router from '../../router/Router';
import { AnswersContext } from '../AnswersContext';
import { defaultAnswers } from '../defaultAnswers';

describe('When a user answer a question', () => {
  const mockContext = {
    answers: defaultAnswers,
    updateAnswers: vi.fn(),
    reset: vi.fn(),
  };

  beforeEach(() => {
    render(
      <AnswersContext.Provider value={mockContext}>
        <Router initialPage={Pages.SCENARIO_ONE} />
      </AnswersContext.Provider>
    );
  });

  test('updates the context', () => {
    const button = screen.getByRole('button', { name: 'Just a friend' });
    fireEvent.click(button);
    expect(mockContext.updateAnswers).toHaveBeenCalledTimes(1);
    expect(mockContext.updateAnswers).toHaveBeenCalledWith(1, 1);
  });
});
