import axios from 'axios';

const estreno = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie'
});

/* const imagenes = axios.create({
  baseURL: 'https://image.tmdb.org/t/p/w500'
}); */

export { estreno };

/* 

Peliculas Populares
https://api.themoviedb.org/3/movie/popular?api_key=6b55d5e01270784e97265e1628fcf6f9&page=1

Cartelera
https://api.themoviedb.org/3/movie/now_playing?api_key=6b55d5e01270784e97265e1628fcf6f9

Imagenes
https://image.tmdb.org/t/p/w500/${id}.jpg
*/
