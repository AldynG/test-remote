import CONFIG from './config';

const ENDPOINT = {
  listresto: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default ENDPOINT;
