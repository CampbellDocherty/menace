import { Pages } from '../../Pages';

export type Scenarios = Exclude<
  Pages,
  Pages.HOME | Pages.CAPTCHA | Pages.RESULTS | Pages.PERSONALITY
>;
