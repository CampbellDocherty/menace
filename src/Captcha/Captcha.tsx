import { useState } from 'react';
import {
  CaptchaActionWrapper,
  Container,
  ErrorText,
  GridWrapper,
  Square,
  VerifyCaptchaButton,
} from './styles';

const gridSquares = Array(9).fill(null);

export const Captcha = () => {
  const [selectedImages, setSelectedImages] = useState<ReadonlyArray<number>>(
    []
  );

  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const updatedSelectedImages = (elementToAddOrRemove: number) => {
    const array = [...selectedImages];
    if (array.includes(elementToAddOrRemove)) {
      const index = array.indexOf(elementToAddOrRemove);
      array.splice(index, 1);
    } else {
      array.push(elementToAddOrRemove);
    }
    setSelectedImages(array);
  };

  const onVerify = () => {
    if (selectedImages.length === 0) {
      setCaptchaError('Please select at least one image');
      return;
    }
  };
  return (
    <Container>
      <p>
        Please select all the images with a menace in them. Click verify once
        there are none left.
      </p>
      <GridWrapper>
        {gridSquares.map((_, i) => {
          return (
            <Square
              key={i}
              data-testid={`captcha-image-${i + 1}`}
              onClick={() => updatedSelectedImages(i)}
              selected={selectedImages.includes(i)}
            />
          );
        })}
      </GridWrapper>
      <CaptchaActionWrapper>
        {captchaError && <ErrorText>{captchaError}</ErrorText>}
        <VerifyCaptchaButton onClick={onVerify}>Verify</VerifyCaptchaButton>
      </CaptchaActionWrapper>
    </Container>
  );
};
