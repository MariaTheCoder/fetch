/**
 * Get all users
 */
function posts(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

posts("https://jsonplaceholder.typicode.com/users/");
