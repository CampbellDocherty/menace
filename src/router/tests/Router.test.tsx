import { render, screen } from '@testing-library/react';
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

describe('When a user comes back to the app having got part way through the personality test', () => {
  beforeEach(() => {
    localStorage.setItem('lastVisitedPage', `${Pages.SCENARIO_FIVE}`);
    render(<App />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('shows them their last visited page', () => {
    screen.getByText('Scenario 5');
  });
});
