import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import App from '../../App';
import { Pages } from '../../Pages';

describe('When a user lands on a page', () => {
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('sets local storage with that page', () => {
    expect(setItemSpy).toHaveBeenCalledTimes(1);
    expect(setItemSpy).toHaveBeenCalledWith('lastVisitedPage', `${Pages.HOME}`);
  });
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

describe('When a user comes back to the app having got part way through the personality test', () => {
  beforeEach(() => {
    localStorage.setItem('lastVisitedPage', `${Pages.SCENARIO_TEN}`);
    localStorage.setItem('previousAnswers', JSON.stringify(MOCK_ANSWERS()));
    render(<App />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('shows them their last visited page', () => {
    screen.getByText('Scenario 10');
  });

  test('saves their previously inputted answers', () => {
    screen.getByText('Scenario 10');
    const button = screen.getByRole('button', { name: 'Menace' });
    fireEvent.click(button);
    screen.getByText('Results');
    screen.getByText('You are 100% menace');
  });
});
