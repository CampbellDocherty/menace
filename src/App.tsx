import { AnswersProvider } from './context/Answers/AnswersProvider';
import Router from './router/Router';
import { Container } from './styles';
import { Provider } from './context/Pages/Provider';
import { Footer } from './pages/Footer';
import Background from './pages/Canvas';

const App = () => {
  return (
    <Provider>
      <AnswersProvider>
        <Background />
        <Container>
          <Router />
          <Footer />
        </Container>
      </AnswersProvider>
    </Provider>
  );
};

export default App;
