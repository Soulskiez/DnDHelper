import React, { useEffect } from 'react';
import makeClassesFetch from '../../fetches/makeClassesFetch';
import { useFetch, useDispatch } from 'resift';

import MainPage from './MainPage';

function MainPageContainer() {
  const dispatch = useDispatch();
  const classesFetch = makeClassesFetch();
  useEffect(() => {
    dispatch(classesFetch());
  }, []);
  const [classesDnd, status] = useFetch(classesFetch);
  return status === 1 ? <MainPage classesDnd={classesDnd} /> : null;
}
export default MainPageContainer;
