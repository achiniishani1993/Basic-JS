
const movies = [];
let running = true;

function addMovies() {
  const title = prompt("Enter movie name: ");
  if (title === null) {
    running = false;
    return;
  }

  const director = prompt("Enter director name: ");
  if (director === null) {
    running = false;
    return;
  }

  const isReadInput = prompt("Have you watched it? (yes/no)");
  if (isReadInput === null) {
    running = false;
    return;
  }

  const movie = {
    title,
    director,
    isRead: isReadInput.toLowerCase() === "yes",
  };

  movies.push(movie);
  alert("Movie added to your list...");
}

function listMovies() {
  if (movies.length === 0) {
    alert("No movies in your list.");
    return;
  }

  let output = "";

  movies.forEach((movie, index) => {
    output += `${index + 1}. ${movie.title} by ${movie.director} - ${
      movie.isRead ? "Watched" : "Not Watched"
    }\n`;
  });

  alert(output);
}

function markAsWatched(title) {
  const movie = movies.find(
    (m) => m.title.toLowerCase() === title.toLowerCase()
  );

  if (movie) {
    movie.isRead = true;
    alert(`"${movie.title}" marked as watched`);
  } else {
    alert("Movie not found");
  }
}

function removeMovie(title) {
  const index = movies.findIndex(
    (m) => m.title.toLowerCase() === title.toLowerCase()
  );

  if (index !== -1) {
    const removed = movies.splice(index, 1);
    alert(`"${removed[0].title}" removed`);
  } else {
    alert("Movie not found");
  }
}

function listUnWatchMovies() {
  const unWatch = movies.filter((movie) => !movie.isRead);

  if (unWatch.length === 0) {
    alert("No unwatched movies");
    return;
  }

  let output = "";
  unWatch.forEach((movie) => {
    output += `${movie.title} by ${movie.director} (Not Watched)\n`;
  });

  alert(output);
}

function movieApp() {
  running = true;

  while (running) {
    const choice = prompt(`Movie Tracker
1. Add Movie
2. List Movies
3. Mark movie as Watched
4. Remove Movie
5. List Unwatched movies
6. Exit
Enter your choice:`);

    if (choice === null) {
      running = false;
      alert("App cancelled");
      break;
    }

    switch (choice) {
      case "1":
        addMovies();
        break;

      case "2":
        listMovies();
        break;

      case "3":
        const titleToMark = prompt("Enter title to mark as watched:");
        if (titleToMark === null) {
          running = false;
          break;
        }
        markAsWatched(titleToMark);
        break;

      case "4":
        const titleToRemove = prompt("Enter title to remove:");
        if (titleToRemove === null) {
          running = false;
          break;
        }
        removeMovie(titleToRemove);
        break;

      case "5":
        listUnWatchMovies();
        break;

      case "6":
        running = false;
        alert("Good Bye!");
        break;

      default:
        alert("Invalid choice, try again!");
    }
  }
}
