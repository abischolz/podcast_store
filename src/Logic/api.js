// API CALLS TO BACK END
import axios from 'axios';

export const getAllPodcasts = async () => {
  const getAllPodcastsConfig = {
    baseUrl: 'localhost:8080',
    headers: {
      Authorization: 'auth token',
    },
    method: 'get',
    url: '/podcasts',
  };
  const { data } = await axios(getAllPodcastsConfig);
  return data;
};

export const getPodcastById = async (id) => {
  try {
    const getPodcastByIdConfig = {
      baseUrl: 'localhost:8080',
      headers: {
        Authorization: 'auth token',
      },
      method: 'get',
      url: `/podcasts/${id}`,
    };
    const { data } = await axios(getPodcastByIdConfig);

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const logIn = async () => {
  try {
    const logInConfig = {
      baseUrl: 'localhost:8080',
      headers: {
        Authorization: 'auth token',
      },
      method: 'get',
      url: '/login',
    };
    const { data } = await axios(logInConfig);

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const logOut = async () => {
  try {
    const logOutConfig = {
      baseUrl: 'localhost:8080',
      headers: {
        Authorization: 'auth token',
      },
      method: 'get',
      url: '/login',
    };
  } catch (error) {}
};
