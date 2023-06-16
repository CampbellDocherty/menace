import { useState } from 'react';
import { Captcha } from './Captcha/Captcha';
import { Home } from './Home/Home';
import { Container } from './styles';

enum Pages {
  HOME,
  CAPTCHA,
}

const App = () => {
  const [page, setPage] = useState(Pages.HOME);

  const Router = () => {
    switch (page) {
      case Pages.CAPTCHA:
        return <Captcha />;
      default:
        return <Home onProceed={() => setPage(Pages.CAPTCHA)} />;
    }
  };

  return (
    <Container>
      <Router />
    </Container>
  );
};

export default App;
