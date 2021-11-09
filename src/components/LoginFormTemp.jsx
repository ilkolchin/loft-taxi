import React from "react";
import { useForm } from "react-hook-form";


export const LoginFormTemp = (props) => {

  // const { register, handleSubmit, formState: { errors } } = useForm();
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = data => {
    // console.log(data);
    props.authenticate(data);
  };

  return (
    <form className="Login__content" onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="email" className="Login__label">Email</label>
      <input {...register("email", {required: 'Введите email'})} type='email' placeholder="mail@mail.ru" className="Login__input" />

      <label htmlFor="password" className="Login__label">Пароль</label>
      <input {...register("password", {required: 'Введите пароль'})} type='password' placeholder="*********" className="Login__input" />
      {/* {errors.password && <span>Введите пароль</span>} */}

      <div className="Login__info">Забыли пароль?</div>
      <input type="submit" value="Войти" className="Login__submit" />

    </form>
  );
}