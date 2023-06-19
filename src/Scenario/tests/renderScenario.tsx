import { render } from '@testing-library/react';
import Router, { Pages } from '../../Router';

export const renderScenario = (page: Pages) => {
  render(<Router initialPage={page} />);
};
