import { useRouter } from 'next/router';
import { useState } from 'react';

export const useForm = () => {
  // const router = useRouter();
  const [form, setForm] = useState({
    search: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return {
    form,
    handleChange,
    setForm
  };
};
