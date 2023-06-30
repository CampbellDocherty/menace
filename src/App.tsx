import { AnswersProvider } from './context/AnswersProvider';
import Router from './Router';
import { Container } from './styles';

const App = () => {
  return (
    <AnswersProvider>
      <Container>
        <Router />
      </Container>
    </AnswersProvider>
  );
};

export default App;
