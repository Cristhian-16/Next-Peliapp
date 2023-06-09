'use client';

import Image from 'next/image';

export const Header = () => {
  return (
    <header className={`fixed top-0 left-0 right-0 text-white py-2`}>
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
          <form className='flex items-center gap-2'>
            <input
              type='text'
              placeholder='Buscar Peliculas'
              className='cell:w-[150px] md:w-[300px] lg:w-[250px] xl:w-[300px]  rounded-md px-2 border-none bg-transparent focus:bg-white focus:outline-none focus:text-black '
            />
            <button>
              <Image
                src={'/lupa.png'}
                alt='Lupa'
                width={30}
                height={30}
                className='invert'
              />
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};
