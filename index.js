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
