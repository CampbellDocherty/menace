import { useState } from 'react';
import {
  CaptchaActionWrapper,
  Container,
  ErrorText,
  GridWrapper,
  Square,
  VerifyCaptchaButton,
} from './styles';

const GRID_SQUARES = Array(9).fill(null);
const CORRECT_IMAGES = [2, 5, 6];

export const Captcha = ({ onProceed }: { onProceed: () => void }) => {
  const [selectedImages, setSelectedImages] = useState<Array<number>>([]);

  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const updateSelectedImages = (elementToAddOrRemove: number) => {
    setCaptchaError(null);
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

    if (
      JSON.stringify(selectedImages.sort()) !==
      JSON.stringify(CORRECT_IMAGES.sort())
    ) {
      setCaptchaError("It looks like you didn't select the right images :(");
      setSelectedImages([]);
      return;
    }

    onProceed();
  };
  return (
    <Container>
      <p>
        Please select all the images with a menace in them. Click verify once
        there are none left.
      </p>
      <GridWrapper>
        {GRID_SQUARES.map((_, i) => {
          const imageNumber = i + 1;
          return (
            <Square
              key={i}
              data-testid={`captcha-image-${imageNumber}`}
              onClick={() => updateSelectedImages(imageNumber)}
              selected={selectedImages.includes(imageNumber)}
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
