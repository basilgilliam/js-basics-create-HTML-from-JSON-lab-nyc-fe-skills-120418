document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here


const titanicButton = document.getElementById('Titanic')
const termButton = document.getElementById('Terminator 2')

const review = document.getElementById('review')
const description= document.getElementById('description')
const audienceScore = document.getElementById('audienceScore')

const changeMovie = (movie) =>{
  const title = document.getElementById('title')
  title.innerHTML= movies[movie].title
  const director = document.getElementById('director')
  director.innerHTML = movies[movie].director
  const genre = document.getElementById('genre')
  genre.innerHTML = movies[movie].genres
  const filmRating = document.getElementById('filmRating') 
  filmRating.innerHTML = movies[movie].filmRating
  const posterImg = document.getElementById('poster')
  posterImg.src = movies[movie].poster
  const description = document.getElementById('description')
  description.innerHTML= movies[movie].description
  const score = document.getElementById('audienceScore')
  score.innerHTML = movies[movie].audienceScore
  
  
  const castUl = document.createElement('ul')
  
  for(let person of movies[movie].cast){
    const li = document.createElement('li')
    li.innerHTML = person.role + ': ' + person.actor
    castUl.appendChild(li)
  }
  
  const castDiv = document.getElementById('cast')
  castDiv.appendChild(castUl)
  

const reviewsUl = document.createElement('ul')
  
  for(let review of movies[movie].reviews) {
    const li = document.createElement('li')
    li.innerHTML = review.username + ': ' + review.content
    reviewsUl.appendChild(li)
  }
  
  const reviewsDiv = document.getElementById('reviews')
  reviewsDiv.appendChild(reviewsUl)
  
}

titanicButton.addEventListener('click', () => changeMovie('Titanic'))
termButton.addEventListener('click', () => changeMovie('Terminator 2'))
 
});
