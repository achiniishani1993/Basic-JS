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

  movies.forEach((movie, index) => {
    outPut += `${index + 1}. ${movie.title} by  ${movie.director} - ${movie.isRead ? "Watched" : "Not Watched"}<br>`;
  });

  document.getElementById("movieOutPut").innerHTML = outPut;
}

function markAsRead(title) {
  const movie = movies.find(
    (m) => m.title.toLowerCase() === title.toLowerCase(),
  );

  if (movie) {
    movie.isRead = true;
    listMovies();
  } else {
    document.getElementById("movieOutPut").innerHTML = "Movie not found";
  }
}

function remove(title){
    const index = movies.findIndex((m) => m.title.toLowerCase() === title.toLowerCase());

    if (index !== -1){
        const removed = movies.splice(index, 1);
        document.getElementById("movieOutPut").innerHTML = `"${removed[0].title}" has removed from the list`;
    }else {
        document.getElementById("movieOutPut").innerHTML = "Movie not found" ;
    }

}

