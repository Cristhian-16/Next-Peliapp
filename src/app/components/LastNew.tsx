import Image from 'next/image';
import React, { FC } from 'react';

interface PropsLastNew {
  movie: {
    image: string;
    title: string;
    puntuacion: number;
    id: number;
    poster: string;
    descripcion: string;
    popularidad: number;
    estreno: Date;
    countVotes: number;
    adult: boolean;
  };
}

export const LastNew: FC<PropsLastNew> = ({ movie }) => {
  return (
    <div className=' cell:p-4 flex flex-col items-center justify-center'>
      <Image
        src={movie.image}
        alt={movie.title}
        width={400}
        height={400}
        className='h-auto w-auto block hover:scale-95 transition duration-500 ease-in-out rounded-lg cursor-pointer'
      />
      <h3 className='mt-4'>{movie.title}</h3>
    </div>
  );
};
