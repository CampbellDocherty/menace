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
    localStorage.setItem('lastVisitedPage', `${page}`);
  }, [page]);

  const proceed = useCallback(() => {
    setPage(page + 1);
  }, [setPage, page]);

  const back = useCallback(() => {
    setPage(page - 1);
  }, [setPage, page]);

  const restart = useCallback(() => {
    setPage(Pages.HOME);
  }, [setPage, page]);

  const providerData = { page, proceed, back, restart };

  return <Context.Provider value={providerData}>{children}</Context.Provider>;
};