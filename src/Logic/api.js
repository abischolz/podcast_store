// API CALLS TO BACK END
import axios from "axios";

const headers = {
  "Access-Control-Request-Headers": "Content-Type",
  "Access-Control-Allow-Origin": "*",
};

export const getAllPodcasts = async () => {
  try {
    const { data } = await axios.get("http://localhost:8080/podcasts", {
      headers,
    });
    const podcasts = data.podcasts;
    return podcasts;
  } catch (error) {
    console.log(error);
  }
};

export const getPodcastById = async (id) => {
  try {
    const getPodcastByIdConfig = {
      baseUrl: "localhost:8080",
      headers: {
        Authorization: "auth token",
      },
      method: "get",
      url: `/podcasts /${id}`,
      headers,
    };
    const { data } = await axios(getPodcastByIdConfig);

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const searchPodcasts = async (value) => {
  try {
    const searchPodcastsConfig = {
      baseUrl: "localhost:8080/api",
      method: "get",
      params: {
        q: value,
      },
      url: "/podcasts/search",
      headers,
    };

    const { data } = await axios(searchPodcastsConfig);
    const podcasts = data.results;
    return podcasts;
  } catch (e) {
    console.log(e);
  }
};

const like = async (id) => {
  try {
    const likeConfig = {
      baseUrl: "localhost:8080/api",
      method: "put",
      url: `/podcasts/${id}/like`,
      headers,
    };

    const { data } = await axios(likeConfig);
  } catch (error) {
    console.log(error);
  }
};
