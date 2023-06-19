import { beforeEach, describe, test } from 'vitest';
import { screen } from '@testing-library/react';
import { renderScenario } from './renderScenario';
import { Pages } from '../../Router';

describe('when a user arrives at the first scenario', () => {
  beforeEach(() => {
    renderScenario(Pages.SCENARIO_ONE);
  });

  test('shows the scenario', () => {
    screen.getByText('Scenario 1');
  });
});
