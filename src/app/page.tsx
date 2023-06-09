import { getTheMovie } from '@/helpers/getTheMovie';
import { LastNew } from './components/LastNew';

export default async function Home() {
  const response = await getTheMovie();

  return (
    <>
      <h2 className='pl-3 mb-2 text-2xl'>Lo mas nuevo....</h2>
      <hr />
      <section className='grid  cell:grid-cols-2 md:grid-cols-3  gap-4'>
        {response.map(movie => (
          <LastNew movie={movie} key={movie.id} />
        ))}
      </section>
    </>
  );
}
