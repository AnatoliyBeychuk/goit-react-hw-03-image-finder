class PixabayAPI {
  BASE_URL = "https://pixabay.com/api/";
  API_KEY = "18530950-a935dc045ea4774fb23c446e2";

  #page = 1;
  #setting = "&image_type=photo&orientation=horizontal&per_page=12";

  load = async (query) => {
    const response = await fetch(
      `${this.BASE_URL}?q=${query}&page=${this.#page}&key=${this.API_KEY}${
        this.#setting
      }`
    );
    return response;
  };

  nextPage = () => {
    return (this.#page += 1);
  };

  resetPage = () => {
    return (this.#page = 1);
  };
}

export default new PixabayAPI();
