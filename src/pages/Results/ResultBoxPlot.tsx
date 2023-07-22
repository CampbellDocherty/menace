import { BoxPlot, GoldilocksBox, ResultMarker } from './styles';

export const ResultBoxPlot = ({ result }: { readonly result: number }) => {
  return (
    <BoxPlot>
      <GoldilocksBox />
      <ResultMarker result={result} />
    </BoxPlot>
  );
};
