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
    setup({ 1: false, 2: false });
    screen.getByText('Menace');
    screen.getByText(
      "You're definitely a menace. Maybe too much of a menace - but don't worry we're not judging! We think you can bring that number down with some self development. Check out our recommended media below!"
    );
  });

  test('shows unique message for 100% menace', () => {
    setup();
    screen.getByText(
      "100% menace! Even when we were developing this test we thought that was only possible in theory. That's too much menace for one person to harness. You've got to reduce your menace, no one can hold 100% for long! Our recommended media might just be the thing that can save you!"
    );
  });
  test('between 40% and 60% shows just right', () => {
    setup({ 1: false, 2: false, 3: false, 4: false });
    screen.getByText('Just Right');
    screen.getByText(
      "You've got the perfect mix of menace and sweetness. You've got the right approach to your romantic life but no one is perfect. Check out our recommneded media, it'll help you stay on your toes!"
    );
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
    screen.getByText(
      "By our calculations you're not a menace. That may sound like a good thing but we think a balanced diet of menace and sweetness is what's best for anyone. You've got to get that number up for your own sake. Our recommended media could help you do just that!"
    );
  });
});
