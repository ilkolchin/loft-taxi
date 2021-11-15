import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registrate } from "../actions";

export const RegisterFormTemp = ({useDispatchHook=useDispatch}) => {
  
  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = data => {
    const { email, password, name, surname } = data;
    dispatch(registrate(email, password, name, surname));
  };


  return (
    <form className="Login__content" onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="email" className="Login__label">Email*</label>
      <input {...register("email", {required: 'Введите email'})} id='email' type='email' placeholder="mail@mail.ru" className="Login__input" />

      <label htmlFor="password" className="Login__label">Придумайте пароль*</label>
      <input {...register("password", {required: 'Придумайте пароль'})} id='password' type='password' placeholder="*********" className="Login__input" />

      <label htmlFor="name" className="Login__label">Имя*</label>
      <input {...register("name", {required: 'Как вас зовут?'})} id='name' type='text' placeholder="Иван" className="Login__input" />

      <label htmlFor="surname" className="Login__label">Фамилия*</label>
      <input {...register("surname", {required: 'Ваши Фамилия?'})} id='surname' type='text' placeholder="Петров" className="Login__input" />

      <input type="submit" value="Зарегистрироваться" className="Login__submit" />

    </form>
  )
}
