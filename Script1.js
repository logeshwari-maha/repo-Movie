let movies = [];
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
 event.preventDefault();

const username = document.getElementById('username').value; 
const password = document.getElementById('password').value;

if (username === "admin" && password === "password") {
     alert("Login successful! Redirecting to admin dashboard.");
      window.location.href = "Admin.html";
} 
else {
alert("Invalid username or password.");
}
});

document.getElementById('movieForm')?.addEventListener('submit', function(event) {
     event.preventDefault();
const movieTitle = document.getElementById('movieTitle').value; 
const movieIndex = document.getElementById('movieIndex').value;
if (movieIndex) {
movies[movieIndex] = { title: movieTitle };
} else {
movies.push({ title: movieTitle });
}
displayMovies();
 resetForm();
});
function displayMovies() {
const movieList = document.getElementById('movieList');
 movieList.innerHTML = movies.map((movie, index) => `<div class="movie-item"><strong>${movie.title}</strong><button onclick="editMovie(${index})">Edit</button><button onclick="deleteMovie(${index})">Delete</button></div>`).join('');
}
function resetForm() { 
    document.getElementById('movieTitle').value = ''; 
    document.getElementById('movieIndex').value = '';
}
function editMovie(index) {
     const movie = movies[index];
document.getElementById('movieTitle').value = movie.title; 
document.getElementById('movieIndex').value = index;
}

function deleteMovie(index) { 
    movies.splice(index, 1); displayMovies();
}
