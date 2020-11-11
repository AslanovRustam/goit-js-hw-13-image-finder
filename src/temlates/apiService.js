export default class ImageApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
};

function fetchImages() {
  const API_KEY = '19076419-9578a5b9e86945eec97e7243e';
  const BASE_URL = 'https://pixabay.com/api';

  return fetch(
    `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
).then(r => r.json()).then(data => {
      this.page += 1;
      return data.hits;
    });
}