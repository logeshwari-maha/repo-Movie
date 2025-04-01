let movies = [];
const exampleMovies = [
{ title: "GOAT" },
{ title: "Amaran" },
{ title: "Vazhai" },
{ title: "Lubber Bandhu" }
];
function loadMovies() {
     movies = exampleMovies; 
     displayMovies();
}
function displayMovies() {
const movieList = document.getElementById('movieList');
 movieList.innerHTML = movies.map(movie => `<div class="movie-item"><strong>${movie.title}</strong></div>`).join('');
}
document.getElementById('reviewForm')
?.addEventListener('submit', function(event) { 
    event.preventDefault();
const movieTitle = document.getElementById('reviewMovieTitle').value.trim();
 const userReview = document.getElementById('userReview').value.trim(); const errorMessage = document.getElementById('errorMessage');
errorMessage.innerText = ''; const movieExists = movies.some
(movie => movie.title.toLowerCase() === movieTitle.toLowerCase()); 
if (!movieExists) {
errorMessage.innerText ='Movie not found! Please enter a valid movie title.'; 
return;
}
const userReviews = document.getElementById('userReviews');
 userReviews.innerHTML+=`<p><strong>${movieTitle}:</strong>${userReview}</p>`;
document.getElementById('reviewMovieTitle').value = ''; 
document.getElementById('userReview').value = '';
})
window.onload = loadMovies;
