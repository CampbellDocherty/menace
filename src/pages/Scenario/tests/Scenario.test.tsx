import { expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Pages } from '../../../Pages';
import Router from '../../../router/Router';
import { Context } from '../../../context/Pages/Context';

const mockPagesContext = {
  page: Pages.SCENARIO_ONE,
  restart: vi.fn(),
  proceed: vi.fn(),
  back: vi.fn(),
};

const renderScenario = (page: Pages) => {
  return render(
    <Context.Provider value={{ ...mockPagesContext, page }}>
      <Router />
    </Context.Provider>,
  );
};

test('Scenario 1', () => {
  renderScenario(Pages.SCENARIO_ONE);
  screen.getByText(
    'Imagine you had been seeing someone for 3 months, only sleeping with them, going to Big Tesco together and spending multiple days in a row with them. Who would this person be to you?',
  );
  const button = screen.getByText('Just a "friend"');
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 2', () => {
  renderScenario(Pages.SCENARIO_TWO);
  screen.getByText(
    'If a sneaky link comes over, how long are you allowing them to stay?',
  );
  const button = screen.getByText(
    "I'm kicking them out as soon as the deed is done",
  );
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 3', () => {
  renderScenario(Pages.SCENARIO_THREE);
  screen.getByText(
    "Let's say you had been going out with someone for 3 years. How long would you wait to get with someone new after the breakup?",
  );
  const button = screen.getByText(
    'With someone for 3 years?! Hahahahahahahahaha 😹',
  );
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 4', () => {
  renderScenario(Pages.SCENARIO_FOUR);
  screen.getByText('How do you usually break up with people?');
  const button = screen.getByText('👻');
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 5', () => {
  renderScenario(Pages.SCENARIO_FIVE);
  screen.getByText('How many people are on your roster right now?');
  const button = screen.getByText("I've got a 5 aside team");
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 6', () => {
  renderScenario(Pages.SCENARIO_SIX);
  screen.getByText(
    "Imagine you're waiting for your date at the station. You keep making eye contact with a penggggg stranger, what are you doing?",
  );
  const button = screen.getByText('I have to get their insta');
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Bonus scenario', () => {
  renderScenario(Pages.SCENARIO_SIX);
  screen.getByText(
    "Oh no! Whilst you're getting their insta your date arrives, what do you tell them?",
  );
  const button = screen.getByText('Gaslight, gaslight, gaslight');
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 7', () => {
  renderScenario(Pages.SCENARIO_SEVEN);
  screen.getByText(
    "You're on holiday with your friends and after a wild night on the strip you end up cheating on your partner. What's your next move?",
  );
  const button = screen.getByText(
    'What happens on holiday stays on holiday 🤐',
  );
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 8', () => {
  renderScenario(Pages.SCENARIO_EIGHT);
  screen.getByText(
    "Under what conditions would you consider hooking up with your friend's ex?",
  );
  const button = screen.getByText(
    "Me and my friends have the same taste, I'll have what they're having 🍽",
  );
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 9', () => {
  renderScenario(Pages.SCENARIO_NINE);
  screen.getByText('What relationship do you have with your ex?');
  const button = screen.getByText("It's like we never left 🤞");
  fireEvent.click(button);
  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 10', () => {
  renderScenario(Pages.SCENARIO_TEN);
  screen.getByText(
    'You have a crush on someone but they say they\'re into your friend "AB", what\'s your next move?',
  );
  const button = screen.getByText("Bad mouth AB, they're a menace anyway");
  fireEvent.click(button);
  expect(mockPagesContext.proceed).toHaveBeenCalledOnce();
});
