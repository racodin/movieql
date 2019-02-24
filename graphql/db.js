import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    let request_url = API_URL;
    if(limit > 0){
        request_url += `limit=${limit}`
    }
    if(rating > 0){
        request_url += `&minimum_rating=${rating}`
    }
    return fetch(`${request_url}`)
        .then(res => res.json())
        .then(json => json.data.movies);
}

// let movies = [
//     {
//         id: 0,
//         name: "Star Wars - The new one",
//         score: 1
//     },
//     {
//         id: 1,
//         name: "Avengers - The new one",
//         score: 8
//     },
//     {
//         id: 2,
//         name: "The Godfather 1",
//         score: 99
//     },
//     {
//         id: 3,
//         name: "Logan",
//         score: 2
//     }
// ];

// export const getMovies = () => movies;

// export const getById = id => {
//     const filteredMovies = movies.filter(
//         movie => movie.id === id
//     );
//     return filteredMovies[0];
// }

// export const deleteMovie = (id) => {
//     const cleanedMovies = movies.filter(
//         movie => movie.id !== id
//     );
//     if(movies.length > cleanedMovies.length){
//         movies = cleanedMovies;
//         console.log(movies);
//         return true;
//     } else {
//         return false;
//     }
// }

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: movies.length,
//         name,
//         score
//     }
//     movies.push(newMovie);
//     console.log(movies);
//     return newMovie;
// }


// export const people = [
//     {
//         id: 1,
//         name: "Amrita George",
//         age: "16",
//         gender: "male"
//     },
//     {
//         id: 2,
//         name: "Neive Roach",
//         age: "22",
//         gender: "male"
//     },
//     {
//         id: 3,
//         name: "Millie-Rose Ashley",
//         age: "32",
//         gender: "female"
//     },
//     {
//         id: 4,
//         name: "Tommy-Lee Findlay",
//         age: "50",
//         gender: "male"
//     },
//     {
//         id: 5,
//         name: "Clementine Bush",
//         age: "30",
//         gender: "female"
//     },
//     {
//         id: 6,
//         name: "Curtis Boyd",
//         age: "28",
//         gender: "male"
//     },
//     {
//         id: 7,
//         name: "Kacie Rogers",
//         age: "18",
//         gender: "female"
//     },
//     {
//         id: 8,
//         name: "Ammar Pratt",
//         age: "22",
//         gender: "female"
//     },
//     {
//         id: 9,
//         name: "Jasper Fenton",
//         age: "43",
//         gender: "female"
//     },
//     {
//         id: 10,
//         name: "Geraldine Squires",
//         age: "32",
//         gender: "male"
//     },
// ]

// export const getById = (id) => {
//     const filteredPeople = people.filter(person => person.id === id);
//     return filteredPeople[0];
// }

