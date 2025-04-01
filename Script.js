let movies = []; 
let reviews = [];
document.getElementById('loginForm')?.addEventListener('submit', function(event) { event.preventDefault();

const username = document.getElementById('username').value;
 const password = document.getElementById('password').value;

if (username === "admin" && password === "password") { 
    alert("Login successful! Redirecting to admin dashboard.");
     window.location.href = "admin.html";
} 
else if (username === "user" && password === "password") {
     alert("Login successful! Redirecting to user dashboard."); 
     window.location.href = "user.html";
} else {
document.getElementById('error').innerText = "Invalid username or password.";
}
});
document.getElementById('movieForm')?.addEventListener('submit', function(event) {
     event.preventDefault();
const movieTitle = document.getElementById('movieTitle').value;
const movieReview = document.getElementById('movieReview').value;

movies.push({ title: movieTitle, review: movieReview }); 
displayMovies();
});

function displayMovies() {
const movieList = document.getElementById('movieList'); 
movieList.innerHTML=movies.map(movie=>`<p><strong>${movie.title}</strong>:
${movie.review}</p>`).join('');
}

document.getElementById('reviewForm')?.addEventListener('submit', function(event) { 
    event.preventDefault();
const reviewMovie = document.getElementById('reviewMovie').value; 
const userReview = document.getElementById('userReview').value;

reviews.push({ title: reviewMovie, review: userReview }); 
displayReviews();
});

function displayReviews() {
const reviewList = document.getElementById('reviewList'); 
reviewList.innerHTML=reviews.map(review=>`<p><strong>${review.title}</strong>:
${review.review}</p>`).join('');
}
