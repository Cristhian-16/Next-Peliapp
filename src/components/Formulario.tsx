'use client';
import { useForm } from '@/hooks/useForm';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Formulario = () => {
  const router = useRouter();
  const { form, handleChange, setForm } = useForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setForm({
      search: ''
    });

    router.push(`/search/${form.search}`);
  };

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      <input
        type='text'
        name='search'
        value={form.search}
        onChange={handleChange}
        placeholder='Buscar Peliculas'
        className='cell:w-[150px] md:w-[300px] lg:w-[250px] xl:w-[300px]  rounded-md px-2 border-none bg-transparent focus:bg-white focus:outline-none focus:text-black '
      />
      <button type='submit'>
        <Image
          src={'/lupa.png'}
          alt='Lupa'
          width={30}
          height={30}
          className='invert'
        />
      </button>
    </form>
  );
};
