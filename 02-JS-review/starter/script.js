// Dom Elements
// const movieTitle = document.getElementById("title");
// const releaseDate = document.getElementById("date");
// const page = document.getElementById("pages");
// const director = document.getElementById("director");
// const review = document.getElementById("reviews");
// const rate = document.getElementById("rate");
// const genre = document.getElementById("genres");
// const translation = document.getElementById("translations");

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const {
//   title,
//   publicationDate,
//   pages,
//   genres,
//   reviews,
//   translations,
//   author,
//   librarything,
// } = data;
const book = getBook(5);

const {
  title,
  author,
  genres,
  pages,
  reviews,
  publicationDate,
  hasMovieAdaptation,
  translations,
  // librarything,
} = book;
const books = document.getElementById("book");
books.innerHTML = `
    
      <div
      class="flex flex-col justify-center items-center absolute top-8 left-0 w-full"
      >
          <h1
            class="text-xl text-black-500 font-bold bg-purple-200 p-2 rounded-lg text-purple-700"
            id="title"
            >
            ${title}
            </h1>
            </div>
            <h2 class="text-lg font-medium bg-red-300 text-red-700 p-2 rounded-xl">
            Release date <span id="date">${publicationDate}</span>
            </h2>
            <p
            class="text-lg font-medium bg-green-300 text-green-700 p-2 rounded-xl"
            >
            Pages: <span id="pages">${pages}</span>
            </p>
            <p
            class="text-lg font-medium bg-amber-300 text-amber-700 p-2 rounded-xl"
            >
            Director: <span id="director">${author}</span>
            </p>
            <p
            class="text-lg font-medium bg-yellow-300 text-yellow-700 p-2 rounded-xl"
            >
            Reviews: <span id="reviews">${reviews.goodreads.rating}</span>
            </p>
            <p class="text-lg font-medium bg-gray-300 text-black p-2 rounded-xl">
            library Rating: <span id="rate">${reviews.librarything.rating}</span>
            </p>
            <div
            class="absolute bottom-16 left-0 w-full flex flex-row justify-around items-center"
            >
            <ul class="bg-blue-100 p-4 rounded-xl flex gap-2" id="genres">
            <li
            class="bg-blue-300 p-2 rounded-xl text-blue-800 font-medium text-md"
            >
            Genres
            </li>
            <li
            class="bg-blue-300 p-2 rounded-xl text-blue-800 font-medium text-md"
            >
            Genres
            </li>
            <li
            class="bg-blue-300 p-2 rounded-xl text-blue-800 font-medium text-md"
            >
            Genres
            </li>
            <li
            class="bg-blue-300 p-2 rounded-xl text-blue-800 font-medium text-md"
            >
            Genres
            </li>
            </ul>
            <ul class="bg-blue-100 p-4 rounded-xl flex gap-2" id="translation">
            <li
            class="bg-blue-300 p-2 rounded-xl text-blue-800 font-medium text-md"
            >
              Translation
              </li>
              <li
              class="bg-blue-300 p-2 rounded-xl text-blue-800 font-medium text-md"
              >
              Translation
              </li>
              <li
              class="bg-blue-300 p-2 rounded-xl text-blue-800 font-medium text-md"
              >
              Translation
              </li>
              <li
              class="bg-blue-300 p-2 rounded-xl text-blue-800 font-medium text-md"
              >
              Translation
              </li>
              </ul>
              </div>
              </div>
             
`;

// books.appendChild(book);

// Destructring

// console.log(book.genres);
// console.log(book.reviews);

const [first, second, ...third] = genres;
const moreGenres = [...genres, "drama", "romance"];

// console.log(first, second, third);
console.log(moreGenres);

// Arrow Functions
const getYear = (date) => date.split("-")[0];

// Template Literals
const templateLiterals = `The book ${title} was written by ${author} and has ${pages} pages with ${
  207600 - 598
} fans worldwide, it was published on ${getYear(
  publicationDate
)} and has a rating of ${reviews.goodreads.rating} on Goodreads ${
  hasMovieAdaptation ? "has movie adaptation" : "no movie adaptation"
}`;
console.log(templateLiterals);

// const updatedBook = { ...book, games: 25 };

// Itenery Operator

reviews.librarything.reviewsCount > 2000
  ? console.log(`${title} is popular`)
  : console.log(`${title} is not popular`);
