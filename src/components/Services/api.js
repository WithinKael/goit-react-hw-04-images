import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

// 'https://pixabay.com/api/?q=cat&page=1&key=39406801-8190735af29119bb92d60f7da&image_type=photo&orientation=horizontal&per_page=12';

export const getImages = async (query, newPage) => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const { data } = await axios.get('/', {
    params: {
      q: query,
      page: newPage,
      key: '39406801-8190735af29119bb92d60f7da',
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  return data;
};
