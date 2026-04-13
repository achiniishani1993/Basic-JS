const movies = [];
let running = true;

function addMovies() {
  const title = prompt("Enter movie name: ");
  const director = prompt("Enter director name: ");
  const isReadInput = prompt("Have you watched it? (yes/no)");

  const movie = {
    title: title,
    director: director,
    isRead: isReadInput.toLocaleLowerCase() === "yes",
  };

  movies.push(movie);
  alert("Movie added to your list...");
}

function listMovies() {
  if (movies.length === 0) {
    document.getElementById("movieOutPut").innerHTML =
      "No movies in your list. Please add your movies first";
    return;
  }

  let outPut = "";

  movies.forEach((movie , index) => {
    outPut += `${index + 1}. ${movie.title} by  ${movie.director} - ${movie.isRead ? "Watched" : "Not Watched"}<br>`;

  });

  document.getElementById("movieOutPut").innerHTML = outPut;
  
}
