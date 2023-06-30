import { beforeEach, describe, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderScenario } from './renderScenario';
import { Pages } from '../../../Pages';
import App from '../../../App';

describe('when a user arrives at the tenth scenario', () => {
  beforeEach(() => {
    renderScenario(Pages.SCENARIO_TEN);
  });

  test('shows the scenario', () => {
    screen.getByText('Scenario 10');
  });

  test.each(['Menace', 'Not menace'])(
    'can proceed by selecting the %s option',
    (buttonText: string) => {
      const button = screen.getByText(buttonText);
      fireEvent.click(button);
      screen.getByText('Results');
    }
  );
});

const MOCK_ANSWERS = () => ({
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
  10: null,
});

describe('When a user comes back to the tenth scenario having completed the other steps', () => {
  beforeEach(() => {
    localStorage.setItem('lastVisitedPage', `${Pages.SCENARIO_TEN}`);
    localStorage.setItem('previousAnswers', JSON.stringify(MOCK_ANSWERS()));
    render(<App />);
  });

  test('saves their previously inputted answers', () => {
    screen.getByText('Scenario 10');
    const button = screen.getByRole('button', { name: 'Menace' });
    fireEvent.click(button);
    screen.getByText('Results');
    screen.getByText('You are 100% menace');
  });
});
