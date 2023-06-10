import { getTheMovieName } from '@/helpers/getMovieName';

interface PropsMovieSearchByID {
  params: {
    name: string;
  };
}

export default async function MovieSearchByID({
  params: { name }
}: PropsMovieSearchByID) {
  const res = await getTheMovieName(name);

  console.log(res);
  return (
    <>
      <h1>HOla Mundo</h1>
    </>
  );
}
