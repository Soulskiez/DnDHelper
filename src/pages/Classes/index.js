import React, { useEffect } from 'react';
import makeClassesFetch from '../../fetches/makeClassesFetch';
import { useFetch, useDispatch } from 'resift';

import Classes from './Classes';

function ClassesContainer() {
  const dispatch = useDispatch();
  const classesFetch = makeClassesFetch();
  useEffect(() => {
    dispatch(classesFetch());
  }, []);
  const [classesDnd, status] = useFetch(classesFetch);
  return status === 1 ? <Classes classesDnd={classesDnd} /> : null;
}
export default ClassesContainer;
