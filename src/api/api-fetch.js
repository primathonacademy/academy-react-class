// CRUD => Create, Read, Update, Delete

// Create => POST
// Read => GET
// Update => PUT
// Delete => DELETE

const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = () => {
  return fetch(`${API_URL}/posts`, {
    method: "GET",
  }).then((response) => response.json());
};

// Create a post
export const createPost = (post) => {
  return fetch(`${API_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

// Get a single post
export const getSinglePost = (id) => {
  return fetch(`${API_URL}/posts/${id}`, {
    method: "GET",
  }).then((response) => response.json());
};

// Update a post
export const updatePost = (id, post) => {
  return fetch(`${API_URL}/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

// Delete a post
export const deletePost = (id) => {
  return fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
};
