// API CALLS TO BACK END
import axios from "axios";

export const getAllPodcasts = async () => {
  try {
    const headers = {
      "Content-Type": "text/plain",
    };
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
      url: `/podcasts/${id}`,
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
      baseUrl: "localhost:8080",
      method: "get",
      data: {
        q: value,
      },
      url: "/podcasts/search",
    };

    const { results } = await axios(searchPodcastsConfig);
    const podcasts = results;
    return podcasts;
  } catch (e) {
    console.log(e);
  }
};
