import { moviesApiUrl } from "./constants";

class Api {
  constructor({ address, headers }) {
    this._address = address;
    this._headers = headers;
  }

  /* Ответ от сервера всегда проверяется на корректность */
  _checkCorrectness(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getMoviesCards() {
    return fetch(`${this._address}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkCorrectness);
  };
}

export const moviesApi = new Api({
  address: moviesApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});