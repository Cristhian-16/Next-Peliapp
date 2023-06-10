import Image from 'next/image';
import Link from 'next/link';

interface PropsSearchMovie {
  movie: {
    id: number;
    title: string;
    image: string;
  };
}

export const SearchMovie = ({ movie }: PropsSearchMovie) => {
  return (
    <Link
      href={`/${movie.id}`}
      key={movie.id}
      className='cell:p-4 flex flex-col items-center justify-center'
    >
      <Image
        src={movie.image}
        alt={movie.title}
        width={400}
        height={400}
        className='h-auto w-auto block hover:scale-95 transition duration-500 ease-in-out rounded-lg cursor-pointer'
      />
      <h3 className='mt-4'>{movie.title}</h3>
    </Link>
  );
};
