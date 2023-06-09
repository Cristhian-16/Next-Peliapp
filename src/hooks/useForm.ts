import { useState } from 'react';

export const useForm = () => {
  const [form, setForm] = useState({
    search: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setForm({
      search: ''
    });

    /* CON ESTA DATA REALIZAR LA SOLICITUD */
    console.log(form.search);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return {
    form,
    handleSubmit,
    handleChange
  };
};
