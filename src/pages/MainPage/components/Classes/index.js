import React, { useState, useEffect } from 'react';
import makeClassFetch from '../../../../fetches/makeClassFetch';
import { useFetch, useDispatch } from 'resift';

import Classes from './Classes';

function ClassesContainer(props) {
  const dispatch = useDispatch();
  const classFetch = makeClassFetch();
  const [classIndex, setClassIndex] = useState(1);

  useEffect(() => {
    dispatch(classFetch(classIndex));
  }, [classIndex]);

  const [classInfo, status] = useFetch(classFetch);
  return (
    <Classes
      {...props}
      classInfo={classInfo}
      classStatus={status}
      setClassIndex={setClassIndex}
    />
  );
}
export default ClassesContainer;
