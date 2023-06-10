import Image from 'next/image';
import { getTheMovieName } from '@/helpers/getMovieName';
import { SearchMovie } from '../components/SearchMovie';

interface PropsMovieSearchByID {
  params: {
    name: string;
  };
}

export default async function MovieSearchByID({
  params: { name }
}: PropsMovieSearchByID) {
  const res = await getTheMovieName(name);

  return (
    <>
      <h1 className='mb-2 mx-2'>MovieSearchByID</h1>
      <hr />
      <section className='grid  cell:grid-cols-2 md:grid-cols-3  gap-4 mt-2'>
        {res.map(movie => (
          <SearchMovie movie={movie} key={movie.id} />
        ))}
      </section>
    </>
  );
}
