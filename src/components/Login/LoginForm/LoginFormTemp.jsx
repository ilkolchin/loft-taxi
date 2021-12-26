import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authenticate } from "../../../actions";

import './LoginFormTemp.scss'

export const LoginFormTemp = ({ useDispatchHook = useDispatch }) => {

  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = data => {
    const { email, password } = data;
    dispatch(authenticate(email, password));
  };

  return (
    <form className="Login__content" onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="email" className="Login__label">Email</label>
      <input {...register("email", { required: 'Введите email' })} id='email' type='email' placeholder="aa@aa.com" className="Login__input" />

      <label htmlFor="password" className="Login__label">Пароль</label>
      <input {...register("password", { required: 'Введите пароль' })} id='password' type='password' placeholder="123" className="Login__input" />

      <div className="Login__info">Забыли пароль?</div>
      <input type="submit" value="Войти" className="Login__submit" />

    </form>
  );
}