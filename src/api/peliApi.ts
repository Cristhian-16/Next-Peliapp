import axios from 'axios';

const estreno = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie'
});

const search = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie'
});

export { estreno, search };

/* 

Search
https://api.themoviedb.org/3/search/movie?api_key=6b55d5e01270784e97265e1628fcf6f9&query=batman

Peliculas Populares
https://api.themoviedb.org/3/movie/popular?api_key=6b55d5e01270784e97265e1628fcf6f9&page=1

Cartelera
https://api.themoviedb.org/3/movie/now_playing?api_key=6b55d5e01270784e97265e1628fcf6f9

Imagenes
https://image.tmdb.org/t/p/w500/${id}.jpg

id : 

https://api.themoviedb.org/3/movie/502356?api_key=6b55d5e01270784e97265e1628fcf6f9
*/
