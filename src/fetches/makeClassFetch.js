import { defineFetch } from 'resift';

const makeClassFetch = defineFetch({
  displayName: 'Class Fetch',
  make: () => ({
    key: ['class'],
    request: index => ({ http }) => {
      const classInfo = http({
        method: 'GET',
        route: `/classes/${index}`,
      });
      return classInfo;
    },
  }),
});
export default makeClassFetch;
