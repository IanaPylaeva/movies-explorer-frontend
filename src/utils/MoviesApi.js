import { moviesApiUrl } from "./constants";

class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  /* Ответ от сервера всегда проверяется на корректность */
  _checkCorrectness(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getMovies() {
    const lsFilms = localStorage.getItem('beatfilm.movies');
    if (lsFilms) {
      return Promise.resolve(JSON.parse(lsFilms));
    }
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkCorrectness)
    .then(movies => {
      localStorage.setItem('beatfilm.movies', JSON.stringify(movies));
      return movies;
    });
  };
};

const moviesApi = new MoviesApi({
  url: moviesApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;