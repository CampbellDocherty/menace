import { beforeEach, describe, test } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderScenario } from './renderScenario';
import { Pages } from '../../Router';

describe('when a user arrives at the seventh scenario', () => {
  beforeEach(() => {
    renderScenario(Pages.SCENARIO_SEVEN);
  });

  test('shows the scenario', () => {
    screen.getByText('Scenario 7');
  });

  test.each(['Menace', 'Not menace'])(
    'can proceed by selecting the %s option',
    (buttonText: string) => {
      const button = screen.getByText(buttonText);
      fireEvent.click(button);
      screen.getByText('Scenario 8');
    }
  );
});
