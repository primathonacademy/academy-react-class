// CRUD => Create, Read, Update, Delete

// Create => POST
// Read => GET
// Update => PUT
// Delete => DELETE

const API_BASE_URL = "https://api.themoviedb.org";
const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";

const objectToQueryString = (obj) => {
  if (!obj) {
    obj = {};
  }
  obj["api_key"] = API_KEY;

  const keys = Object.keys(obj);

  const queryParamsArray = keys.map((key) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
  });

  return queryParamsArray.join("&");
};

export const getMovies = async (payload) => {
  const queryParams = objectToQueryString(payload);

  const response = await fetch(
    `${API_BASE_URL}/3/discover/movie?${queryParams}`
  );
  return await response.json();
};

export const searchMovies = async (payload) => {
  const queryParams = objectToQueryString(payload);
  const response = await fetch(`${API_BASE_URL}/3/search/movie?${queryParams}`);
  return await response.json();
};
