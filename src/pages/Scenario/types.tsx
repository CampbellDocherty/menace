import { Pages } from '../../Pages';

export type Scenarios = Exclude<Pages, Pages.HOME | Pages.PERSONALITY>;
