import React from "react";
import { useForm } from "react-hook-form";

export const RegisterFormTemp = (props) => {

  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = data => {
    // console.log(data);
    props.registrate(data);
  };


  return (
    <form className="Login__content" onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="email" className="Login__label">Email*</label>
      <input {...register("email", {required: 'Введите email'})} type='email' placeholder="mail@mail.ru" className="Login__input" />

      <label htmlFor="password" className="Login__label">Придумайте пароль*</label>
      <input {...register("password", {required: 'Придумайте пароль'})} type='password' placeholder="*********" className="Login__input" />

      <label htmlFor="name" className="Login__label">Имя*</label>
      <input {...register("name", {required: 'Как вас зовут?'})} type='text' placeholder="Иван" className="Login__input" />

      <label htmlFor="surname" className="Login__label">Фамилия*</label>
      <input {...register("surname", {required: 'Ваши Фамилия?'})} type='text' placeholder="Петров" className="Login__input" />

      <input type="submit" value="Зарегистрироваться" className="Login__submit" />

    </form>
  )
}
