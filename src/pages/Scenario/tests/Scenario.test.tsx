import { beforeEach, describe, test } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderScenario } from './renderScenario';
import { Pages } from '../../../Pages';

const scenarios = [
  [2, Pages.SCENARIO_TWO],
  [3, Pages.SCENARIO_THREE],
  [4, Pages.SCENARIO_FOUR],
  [5, Pages.SCENARIO_FIVE],
  [6, Pages.SCENARIO_SIX],
  [7, Pages.SCENARIO_SEVEN],
  [8, Pages.SCENARIO_EIGHT],
  [9, Pages.SCENARIO_NINE],
];

describe.each(scenarios)(
  'when a user arrives on page %s',
  (scenarioNumber, page: Pages) => {
    beforeEach(() => {
      renderScenario(page);
    });

    test('shows the scenario', () => {
      screen.getByText(`Scenario ${scenarioNumber}`);
    });

    test.each(['Menace', 'Not menace'])(
      'can proceed by selecting the %s option',
      (buttonText: string) => {
        const button = screen.getByText(buttonText);
        fireEvent.click(button);
        const nextScenarioNumber = scenarioNumber + 1;
        screen.getByText(`Scenario ${nextScenarioNumber}`);
      }
    );
  }
);

describe('when a user arrives at scenario 1', () => {
  beforeEach(() => {
    renderScenario(Pages.SCENARIO_ONE);
  });

  test('shows the scenario', () => {
    screen.getByText(
      'Imagine you had been seeing someone for 3 months, only sleeping with them, going to Ikea together and spending multiple days in a row with them. Who would this person be to you?'
    );
  });

  test.each(['Just a friend', "Ikea!? We're married"])(
    'can proceed by selecting the %s option',
    (buttonText: string) => {
      const button = screen.getByText(buttonText);
      fireEvent.click(button);
      screen.getByTestId(Pages.SCENARIO_TWO);
    }
  );
});
