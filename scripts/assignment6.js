const movies = [
  {
    title: "The perfect couple",
    director: "Susanne Bier",
    isRead: false,
  },
  {
    title: "Monster",
    director: "Max Winkler",
    isRead: false,
  },
  {
    title: "Love untangled ",
    director: "Sun Namkoong",
    isRead: false,
  },
];

function addBook() {
  const title = prompt("Enter movie name: ");
  const director = prompt("Enter director name: ");
  const isReadInput = prompt("Have you watched it? (yes/no)");

  const movie = {
    title: title,
    director: director,
    isRead: isReadInput.toLocaleLowerCase() === "yes"
  };

  movies.push(movie);
  alert("Movie added!")
}

