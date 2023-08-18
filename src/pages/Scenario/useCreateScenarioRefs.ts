import { useRef } from 'react';

export const useCreateScenarioRefs = () => {
  const sceanrioOneRef = useRef<HTMLDivElement>(null);
  const scenarioTwoRef = useRef<HTMLDivElement>(null);
  const scenarioThreeRef = useRef<HTMLDivElement>(null);
  const scenarioFourRef = useRef<HTMLDivElement>(null);
  const scenarioFiveRef = useRef<HTMLDivElement>(null);
  const scenarioSixRef = useRef<HTMLDivElement>(null);
  const scenarioBonusRef = useRef<HTMLDivElement>(null);
  const scenarioSevenRef = useRef<HTMLDivElement>(null);
  const scenarioEightRef = useRef<HTMLDivElement>(null);
  const scenarioNineRef = useRef<HTMLDivElement>(null);
  const scenarioTenRef = useRef<HTMLDivElement>(null);
  return [
    sceanrioOneRef,
    scenarioTwoRef,
    scenarioThreeRef,
    scenarioFourRef,
    scenarioFiveRef,
    scenarioSixRef,
    scenarioBonusRef,
    scenarioSevenRef,
    scenarioEightRef,
    scenarioNineRef,
    scenarioTenRef,
  ];
};
