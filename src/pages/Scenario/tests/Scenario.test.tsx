import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Pages } from '../../../Pages';
import Router from '../../../router/Router';
import { Context } from '../../../context/Pages/Context';

vi.mock('react-transition-group', () => {
  const FakeSwitchTransition = vi.fn(({ children }) => children);
  const FakeTransition = vi.fn(({ children }) => children);
  const FakeCSSTransition = vi.fn((props) => (
    <FakeTransition>{props.children}</FakeTransition>
  ));
  return {
    SwitchTransition: FakeSwitchTransition,
    CSSTransition: FakeCSSTransition,
    Transition: FakeTransition,
  };
});

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

    afterEach(() => {
      vi.clearAllMocks();
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

describe('when a user arrives at scenario 1', () => {
  beforeEach(() => {
    renderScenario(Pages.SCENARIO_ONE);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('shows the scenario', () => {
    screen.getByText(
      'Imagine you had been seeing someone for 3 months, only sleeping with them, going to Ikea together and spending multiple days in a row with them. Who would this person be to you?'
    );
  });

  test('can proceed by selecting the %s option', () => {
    const button = screen.getByText('Just a friend');
    fireEvent.click(button);

    expect(mockPagesContext.proceed).toHaveBeenCalledTimes(1);
  });
});

describe('when a user arrives at scenario 10', () => {
  beforeEach(() => {
    renderScenario(Pages.SCENARIO_TEN);
  });

  test('shows the scenario', () => {
    screen.getByText('Scenario 10');
  });

  test('can proceed by selecting an option', () => {
    const button = screen.getByText('100 menace');
    fireEvent.click(button);
    expect(mockPagesContext.proceed).toHaveBeenCalledOnce();
  });
});
