import { estreno } from '@/api';
import { MoviesResponse } from '@/interfaces';

export const getTheMovie = async () => {
  const { data } = await estreno.get<MoviesResponse>(
    'now_playing?api_key=6b55d5e01270784e97265e1628fcf6f9'
  );

  const mappedMovies = data.results.map(movie => ({
    image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    title: movie.title,
    puntuacion: movie.vote_average,
    id: movie.id,
    poster: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    descripcion: movie.overview,
    popularidad: movie.popularity,
    estreno: movie.release_date,
    countVotes: movie.vote_count,
    adult: movie.adult
  }));

  return mappedMovies;
};
/* 
Backdrops
https://image.tmdb.org/t/p/w500/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg

Poster Path
https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg

 */
