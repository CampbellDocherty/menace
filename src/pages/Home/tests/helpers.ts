import { fireEvent, screen } from '@testing-library/react';

export const fillNickname = async () => {
  screen.getByLabelText('Nickname');
  const input = screen.getByPlaceholderText('e.g. 00ab') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'Cam' } });
};

export const fillEmail = async () => {
  screen.getByLabelText('Email');
  const input = screen.getByPlaceholderText(
    'e.g. ab@gmail.com',
  ) as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'cam@gmail.com' } });
};
