import { defineFetch } from 'resift';

const makeClassesFetch = defineFetch({
  displayName: 'Classes Fetch',
  make: () => ({
    key: ['classes'],
    request: index => ({ http }) => {
      const classes = http({
        method: 'GET',
        route: 'classes',
      });
      return classes;
    },
  }),
});
export default makeClassesFetch;
