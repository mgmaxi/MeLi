import axios from 'axios';

const baseURL = 'https://api.mercadolibre.com';

export const getProducts = async (query) => {
  try {
    const response = await axios.get(baseURL + '/sites/MLA/search?q=:' + query);
    return response;
  } catch (error) {
    console.log(error);
  }
};
