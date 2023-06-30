import { fireEvent, screen } from '@testing-library/react';

export const selectCaptchaImage = (imagePosition: number) => {
  const captchaImage = screen.getByTestId(`captcha-image-${imagePosition}`);
  fireEvent.click(captchaImage);
};
