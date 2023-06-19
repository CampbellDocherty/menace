import { beforeEach, describe, test } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderScenario } from './renderScenario';
import { Pages } from '../../Router';

describe('when a user arrives at the sixth scenario', () => {
  beforeEach(() => {
    renderScenario(Pages.SCENARIO_SIX);
  });

  test('shows the scenario', () => {
    screen.getByText('Scenario 6');
  });

  test.each(['Menace', 'Not menace'])(
    'can proceed by selecting the %s option',
    (buttonText: string) => {
      const button = screen.getByText(buttonText);
      fireEvent.click(button);
      screen.getByText('Scenario 7');
    }
  );
});
