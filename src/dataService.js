import { createHttpService, createDataService } from 'resift';

const http = createHttpService({
  //prefix: '/api',
  getHeaders: () => {
    const token = localStorage.getItem('auth_token'); // or however you get your authentication token

    return {
      Authorization: `Bearer ${token}`,
    };
  },
});

const services = { http };

const dataService = createDataService({
  services,
  onError: e => {
    throw e;
  },
}); // rexair

export default dataService;
