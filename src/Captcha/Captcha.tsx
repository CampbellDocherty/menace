import { Container, GridWrapper, Square, VerifyCaptchaButton } from './styles';

export const Captcha = () => {
  return (
    <Container>
      <p>
        Please select all the images with a menace in them. Click verify once
        there are none left.
      </p>
      <GridWrapper>
        <Square selected={false} />
        <Square selected={false} />
        <Square selected={true} />
        <Square selected={false} />
        <Square selected={false} />
        <Square selected={false} />
        <Square selected={false} />
        <Square selected={true} />
        <Square selected={false} />
      </GridWrapper>
      <VerifyCaptchaButton>Verify</VerifyCaptchaButton>
    </Container>
  );
};
