/**
 * Get all users
 */
function getUsers(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
getUsers("https://jsonplaceholder.typicode.com/users/");

/**
 * Get a single user
 */
getUsers("https://jsonplaceholder.typicode.com/users/2");

/**
 * Create a new user
 */
function createUser(url) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name: "Maria Teilmann Andersen",
      phone: "045-22743457",
      username: "DanishViking",
      website: "http://www.somrevisor.dk",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
createUser("https://jsonplaceholder.typicode.com/users");

/**
 * Update an existing user
 */
function updateUser(url) {
  fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      name: "Something else",
      username: "Something else",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
updateUser("https://jsonplaceholder.typicode.com/users/1");

/**
 * Delete a user
 */
function deleteUser(url) {
  fetch(url, {
    method: "DELETE",
  });
}
deleteUser("https://jsonplaceholder.typicode.com/users/2");

/**
 * Filtering
 */
function filterByUserId(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
filterByUserId("https://jsonplaceholder.typicode.com/posts?userId=1");
filterByUserId("https://jsonplaceholder.typicode.com/albums?userId=3");

/**
 * Listing nested resources
 */
function listing(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
listing("https://jsonplaceholder.typicode.com/users/8/todos");
listing("https://jsonplaceholder.typicode.com/albums/1");
