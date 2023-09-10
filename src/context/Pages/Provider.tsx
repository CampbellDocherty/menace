import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Context } from './Context';
import { Pages } from '../../Pages';

export const Provider = ({
  children,
  initialPage = Pages.HOME,
}: {
  readonly children: ReactNode;
  readonly initialPage?: Pages;
}) => {
  const lastVisitedPage = Number(localStorage.getItem('lastVisitedPage'));
  const [page, setPage] = useState(lastVisitedPage || initialPage);

  useEffect(() => {
    if (page > Pages.PERSONALITY) {
      localStorage.setItem('lastVisitedPage', `${Pages.HOME}`);
      setPage(Pages.HOME);
    } else {
      localStorage.setItem('lastVisitedPage', `${page}`);
    }
  }, [page]);

  const proceed = useCallback(
    (numberOfPagesToProceed = 1) => {
      setPage(page + numberOfPagesToProceed);
    },
    [setPage, page],
  );

  const back = useCallback(
    (numberOfPagesToGoBack = 1) => {
      setPage(page - numberOfPagesToGoBack);
    },
    [setPage, page],
  );

  const restart = useCallback(() => {
    setPage(Pages.HOME);
  }, [setPage, page]);

  const providerData = { page, proceed, back, restart };

  return <Context.Provider value={providerData}>{children}</Context.Provider>;
};
