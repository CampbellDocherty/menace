import { Footer, Title } from './styles';

export const Home = ({ onProceed }: { onProceed: () => void }) => (
  <>
    <Title>Are you a menace?</Title>
    <p>
      Is that a bad thing? In a few short minutes you will know the answer to
      these questions. And whether you are too much of a menance or too little
      of a menace Dr. 00ab has the cure! Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nulla fermentum, diam at rutrum cursus, diam quam
      consectetur lectus, quis tempus justo mauris volutpat massa. In commodo,
      tortor id malesuada placerat, dolor metus ornare massa, eu pharetra lorem
      nisi in quam.
    </p>
    <button onClick={onProceed}>Take the test</button>
    <Footer>
      This is in no way medical advice. Maecenas sit amet ipsum eget dolor
      aliquet pellentesque. Sed eget eros pellentesque, vulputate lorem in,
      aliquet tellus.
    </Footer>
  </>
);
