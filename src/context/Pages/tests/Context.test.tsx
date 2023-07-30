import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { Pages } from '../../../Pages';
import Router from '../../../router/Router';
import { Context } from '../Context';
import { Restart } from '../../../Restart';

const setupContext = (initialPage = Pages.HOME) => ({
  page: initialPage,
  proceed: vi.fn(),
  back: vi.fn(),
  restart: vi.fn(),
});

const setup = (mockContext: ReturnType<typeof setupContext>) => {
  return render(
    <Context.Provider value={mockContext}>
      <Router />
      <Restart />
    </Context.Provider>,
  );
};

test('updates the context when a user proceeds', () => {
  const mockContext = setupContext(Pages.HOME);
  setup(mockContext);
  const button = screen.getByRole('button', { name: 'Take the test' });
  fireEvent.click(button);
  expect(mockContext.proceed).toHaveBeenCalledTimes(1);
});

test('updates the context when a user goes back', () => {
  const mockContext = setupContext(Pages.SCENARIO_ONE);
  setup(mockContext);
  const button = screen.getByAltText('back arrow');
  fireEvent.click(button);
  expect(mockContext.back).toHaveBeenCalledTimes(1);
});

test('updates the context when a user restarts', () => {
  const mockContext = setupContext(Pages.SCENARIO_ONE);
  setup(mockContext);
  const button = screen.getByAltText('restart the test');
  fireEvent.click(button);
  expect(mockContext.restart).toHaveBeenCalledTimes(1);
});
