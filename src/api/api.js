import axios from 'axios';

export const fetchImages = async (query, page) => {
  const URL = 'https://pixabay.com/api';
  const API_KEY = '30259589-e85b59f1319aa3b130ca376fa';

  const response = await axios.get(
    `${URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
