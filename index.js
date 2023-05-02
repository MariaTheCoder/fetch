/**
 * Get all users
 */
function users(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
users("https://jsonplaceholder.typicode.com/users/");

/**
 * Get a single user
 */
users("https://jsonplaceholder.typicode.com/users/2");
