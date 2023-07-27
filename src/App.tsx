import { AnswersProvider } from './context/Answers/AnswersProvider';
import { MusicPlayer } from './music';
import Router from './router/Router';
import { Container } from './styles';
import { Provider } from './context/Pages/Provider';
import { Restart } from './Restart';

const App = () => {
  return (
    <Provider>
      <MusicPlayer />
      <AnswersProvider>
        <Container>
          <Router />
        </Container>
        <Restart />
      </AnswersProvider>
    </Provider>
  );
};

export default App;
