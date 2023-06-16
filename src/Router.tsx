import { useState } from 'react';
import { Captcha } from './Captcha/Captcha';
import { Home } from './Home/Home';

enum Pages {
  HOME,
  CAPTCHA,
}

const Router = () => {
  const [page, setPage] = useState(Pages.HOME);

  switch (page) {
    case Pages.CAPTCHA:
      return <Captcha />;
    default:
      return <Home onProceed={() => setPage(Pages.CAPTCHA)} />;
  }
};

export default Router;
