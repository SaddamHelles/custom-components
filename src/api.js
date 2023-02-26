import axios from 'axios';

const searchImages = async term => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID RkXfZV_2AP0-f1sMOQ8EeipCYhtqF6grPgsEOI-eqq4',
    },
    params: {
      query: term || 'forest',
    },
  });

  return response.data.results;
};
export { searchImages };
