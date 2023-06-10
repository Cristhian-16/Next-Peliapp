import { getTheMovieAcces } from '@/helpers/getMoviesAcces';
import Image from 'next/image';
import Link from 'next/link';

interface PropsMovieByID {
  params: {
    id: string;
  };
}

export default async function MovieByID({ params: { id } }: PropsMovieByID) {
  const response = await getTheMovieAcces(id);

  const rating = response.rating.toFixed(1);

  return (
    <div className=' h-[700px] flex flex-col md:flex-row items-center gap-3'>
      <Image
        src={response.poster}
        alt={response.title}
        width={200}
        height={200}
        className='media:w-[300px] md:w-[400px]'
      />

      <section>
        <h1 className='text-xl text-white mb-4 text-center'>
          {response.title}
        </h1>
        <div className='flex gap-3 justify-center'>
          <div className='flex'>
            <Image
              src={'/visitante.png'}
              alt='Visitante'
              width={20}
              height={20}
              className='invert mr-3'
            />
            {response.votos}
          </div>
          <div className='flex'>
            <Image
              src={'/estrella.png'}
              alt='Estrella'
              width={20}
              height={20}
              className='mr-2'
            />
            {rating}
          </div>
        </div>

        {response.adult ? (
          <p className='text-center my-3'>+18</p>
        ) : (
          <p className='text-center my-3'>Apto para todos</p>
        )}
        <div className='w-[300px]'>
          <p className='mt-2'>{response.descripcion}</p>
        </div>

        <Link
          href={response.page_visited}
          className='block text-center border-2 border-white rounded-md py-2 px-4 mt-4 text-white hover:bg-white hover:text-red-900'
          target='_blank'
        >
          {' '}
          Pagina Oficial
        </Link>
      </section>
    </div>
  );
}
