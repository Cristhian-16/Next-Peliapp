import { estreno } from '@/api';
import { MoviesResponseByID } from '@/interfaces';

export const getTheMovieAcces = async (id: string) => {
  const { data } = await estreno.get<MoviesResponseByID>(
    `${id}?api_key=6b55d5e01270784e97265e1628fcf6f9`
  );

  return {
    adult: data.adult,
    poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
    image_fondo: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
    title: data.title,
    page_visited: data.homepage,
    id: data.id,
    imdb_id: data.imdb_id,
    original_language: data.original_language,
    descripcion: data.overview,
    estreno: data.release_date,
    rating: data.vote_average,
    votos: data.vote_count
  };
};
/* 
Backdrops
https://image.tmdb.org/t/p/w500/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg

Poster Path
https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg

Imagenes
https://image.tmdb.org/t/p/w500/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg
 */
