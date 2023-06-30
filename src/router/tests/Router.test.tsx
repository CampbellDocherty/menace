import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, test } from 'vitest';
import { Pages } from '../../Pages';
import Router from '../Router';

describe('When a user comes back to the app having got part way through the personality test', () => {
  beforeEach(() => {
    localStorage.setItem('lastVisitedPage', `${Pages.SCENARIO_FIVE}`);
    render(<Router />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('shows them their last visited page', () => {
    screen.getByText('Scenario 5');
  });
});
