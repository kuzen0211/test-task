import axios from 'axios';

axios.defaults.baseURL = 'https://6494128f0da866a953671edb.mockapi.io';

export const getTweets = async () => {
  return axios.get('/tweets?page=1&limit=3');
};

export const updateTweets = async (id, newFollowers) => {
  return axios.put(`/tweets/${id}`, { followers: newFollowers });
};

export const load = async (nextPage, itemsPerPage) => {
  return axios.get(`/tweets?page=${nextPage}&limit=${itemsPerPage}`);
};
