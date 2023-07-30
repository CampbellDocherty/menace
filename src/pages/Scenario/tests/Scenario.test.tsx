import { beforeEach, describe, expect, test, vi } from 'vitest';
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
    </Context.Provider>
  );
};

const scenarios = [[9, Pages.SCENARIO_NINE]];

describe.each(scenarios)(
  'when a user arrives on page %s',
  (scenarioNumber, page: Pages) => {
    beforeEach(() => {
      renderScenario(page);
    });

    test('shows the scenario', () => {
      screen.getByText(`Scenario ${scenarioNumber}`);
    });

    test('can proceed by selecting an option', () => {
      const button = screen.getByText('100 menace');
      fireEvent.click(button);

      expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
    });
  }
);

test('Scenario 1', () => {
  renderScenario(Pages.SCENARIO_ONE);
  screen.getByText(
    'Imagine you had been seeing someone for 3 months, only sleeping with them, going to Ikea together and spending multiple days in a row with them. Who would this person be to you?'
  );
  const button = screen.getByText('Just a friend');
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 2', () => {
  renderScenario(Pages.SCENARIO_TWO);
  screen.getByText('If you have gone to a booty call, how long do you stay?');
  const button = screen.getByText("I'm out as soon as the deed is done");
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 3', () => {
  renderScenario(Pages.SCENARIO_THREE);
  screen.getByText(
    "Let's say you had been going out with someone for 3 years. How long would you wait to get with someone new after the breakup?"
  );
  const button = screen.getByText(
    'With someone for 3 years?! Hahahahahahahahaha'
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
  const button = screen.getByText("A lot, and there's room for more");
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 6', () => {
  renderScenario(Pages.SCENARIO_SIX);
  screen.getByText(
    "Imagine you are waiting for your date in a bar. You're talking to the cute bartender and you're really hitting it off. What do you do?"
  );
  const button = screen.getByText(
    'Ask what time they get off and make sure your date ends before then'
  );
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 7', () => {
  renderScenario(Pages.SCENARIO_SEVEN);
  screen.getByText(
    "You're on holiday with your friends and after a wild night on the strip you end up cheating on your partner. What is your next move?"
  );
  const button = screen.getByText(
    'What happens on holiday stays on holiday 🤷‍♂️'
  );
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 8', () => {
  renderScenario(Pages.SCENARIO_EIGHT);
  screen.getByText(
    "Under what conditions would you consider getting with your friend's ex?"
  );
  const button = screen.getByText(
    "Name the time and place I'm in, it's not my fault my friends have great taste 🤷‍♂️"
  );
  fireEvent.click(button);

  expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
});

test('Scenario 10', () => {
  renderScenario(Pages.SCENARIO_TEN);
  const button = screen.getByText('100 menace');
  fireEvent.click(button);
  expect(mockPagesContext.proceed).toHaveBeenCalledOnce();
});
