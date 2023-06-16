import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px;
  text-align: justify;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  aspect-ratio: 1; /* This ensures the grid stays square */
  max-width: 100%; /* Ensures the grid doesn't overflow */
  width: 100%;
  gap: 4px;
`;

export const Square = styled.div<{ readonly selected: boolean }>`
  background-color: #eaeaea;
  border: ${({ selected }) =>
    selected ? '1px solid green' : '1px solid #ccc'};
  box-shadow: ${({ selected }) =>
    selected ? 'inset 0 0 0 2px green' : 'none'};
`;

export const VerifyCaptchaButton = styled.button`
  border-radius: 4px;
  background: none;
  border: 1px solid black;
  width: 10rem;
  height: 2rem;
  cursor: pointer;
  margin-left: auto;
`;

export const CaptchaActionWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
`;

export const ErrorText = styled.p`
  color: red;
  margin: 0;
  margin-right: 16px;
`;
