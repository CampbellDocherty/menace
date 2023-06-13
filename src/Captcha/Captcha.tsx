import { useState } from 'react';
import { Container, GridWrapper, Square, VerifyCaptchaButton } from './styles';

const gridSquares = Array(9).fill(null);

export const Captcha = () => {
  const [selectedImages, setSelectedImages] = useState<ReadonlyArray<number>>(
    []
  );

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
      <VerifyCaptchaButton>Verify</VerifyCaptchaButton>
    </Container>
  );
};
