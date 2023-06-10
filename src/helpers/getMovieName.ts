import { search } from '@/api';
import { MoviesSearch } from '@/interfaces';

export const getTheMovieName = async (name: string) => {
  const { data } = await search.get<MoviesSearch>('', {
    params: {
      api_key: '6b55d5e01270784e97265e1628fcf6f9',
      query: name
    }
  });

  const mappedSearch = data.results.map(movie => ({
    id: movie.id,
    title: movie.title,
    image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  }));

  return mappedSearch;
};

/* 

https://api.themoviedb.org/3/search/movie?api_key=6b55d5e01270784e97265e1628fcf6f9&query=batman

https://api.themoviedb.org/3/search/movie?api_key=6b55d5e01270784e97265e1628fcf6f9&query=batman

Backdrops
https://image.tmdb.org/t/p/w500/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg

Poster Path
https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg

Imagenes
https://image.tmdb.org/t/p/w500/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg
 */
