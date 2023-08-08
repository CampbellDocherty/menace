import { afterEach, beforeEach, vi } from 'vitest';
import 'vitest-canvas-mock';

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

vi.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() =>
  vi.fn(),
);
vi.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(
  () => new Promise(vi.fn),
);

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  vi.clearAllMocks();
});
