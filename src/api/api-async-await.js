// CRUD => Create, Read, Update, Delete

// Create => POST
// Read => GET
// Update => PUT
// Delete => DELETE

const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
  // https://jsonplaceholder.typicode.com/posts
  const response = await fetch(`${API_URL}/posts`, {
    method: "GET",
  });
  return await response.json();
};

// Create a post
export const createPost = async (post) => {
  // https://jsonplaceholder.typicode.com/posts
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
};

// Get a single post
export const getSinglePost = async (id) => {
  // https://jsonplaceholder.typicode.com/posts/1
  const response = await fetch(`${API_URL}/${id}`, {
    method: "GET",
  });
  return await response.json();
};

// Update a post
export const updatePost = async (id, post) => {
  // https://jsonplaceholder.typicode.com/posts/1
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
};

// Delete a post
export const deletePost = async (id) => {
  // https://jsonplaceholder.typicode.com/posts/1
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
