'use client';
import Image from 'next/image';

import { Formulario } from './Formulario';

export const Header = () => {
  return (
    <header className={`  text-white py-2`}>
      <nav className='flex justify-between items-center mx-3'>
        <section className='flex items-center gap-2'>
          <Image
            src={'/camara.png'}
            alt='Camara'
            width={50}
            height={50}
            className='invert'
            priority
          />
          <h1>PelisGratis</h1>
        </section>
        <div>
          <Formulario />
        </div>
      </nav>
    </header>
  );
};
