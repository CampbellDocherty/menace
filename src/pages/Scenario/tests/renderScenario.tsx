import { render } from '@testing-library/react';
import Router from '../../../Router';
import { Pages } from '../../../Pages';

export const renderScenario = (page: Pages) => {
  render(<Router initialPage={page} />);
};
