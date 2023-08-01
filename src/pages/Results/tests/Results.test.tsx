import { render, screen } from '@testing-library/react';
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
    reset: resetAnswersMock,
  };

  const mockPagesContext = {
    page: Pages.RESULTS,
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

describe('When a user arrives at the results page it shows their personality based on the answers', () => {
  test('over 55% shows menace', () => {
    setup({ 1: 0, 2: 0 });
    screen.getByText('Menace');
    screen.getByText(
      "You're definitely a menace. Maybe too much of a menace - but don't worry we're not judging! We think you can bring that number down with some self development. Check out our recommended media below!",
    );
    screen.getByAltText('Abolaji as a menace');
  });

  test('shows unique message for 100% menace', () => {
    setup();
    screen.getByText(
      "100% menace! Even when we were developing this test we thought that was only possible in theory. That's too much menace for one person to harness. Our recommended media might just be the thing that can save you!",
    );
  });

  test('between 45% and 55% shows just right', () => {
    setup({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
    screen.getByText('Just Right');
    screen.getByText(
      "The perfect mix of menace and sweetness. You've got the right approach to your romantic life but no one is perfect. Check out our recommneded media, it'll help you stay on your toes!",
    );
    screen.getByAltText('Abolaji as an angel');
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
    screen.getByText('Not a Menace');
    screen.getByText(
      "By our calculations you're not a menace. That may sound like a good thing but we think a balanced diet of menace and sweetness is what's best for anyone. You've got to get that number up for your own sake. Our recommended media could help you do just that!",
    );
    screen.getByAltText('Abolaji as an angel');
  });
});
