import axios from 'axios';

export const fetchImages = async (query, page) => {
  const URL = 'https://pixabay.com/api';
  const API_KEY = '32675629-6d03a52af7160c0ed7727c460';

  const response = await axios.get(
    `${URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
