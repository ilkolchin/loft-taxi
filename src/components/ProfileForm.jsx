import React from "react";
import { useForm } from "react-hook-form";
import CardImg from '../img/Group 45.png'


export const ProfileForm = (props) => {

  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = data => {
    console.log(data);
    props.cardUpdate(data);
  };


  return (
    <form className="Login__content Profile__content  " onSubmit={handleSubmit(onSubmit)}>

      <div className="Profile__block">
        <div className="Profile__block-inner">
          <label className="Login__label Profile__label">Имя владельца</label>
          <input {...register("cardName", { required: 'Введите имя' })} type='text' placeholder="Ivan Petrov" className="Login__input Profile__input" />
          <label className="Login__label Profile__label">Номер карты</label>
          <input {...register("cardNumber", { required: 'Введите номер карты' })} type='text' placeholder="**** **** **** ****" className="Login__input Profile__input" />
          <div className="Profile__block nomargin">
            <div className="Profile__block-inner nomargin">
              <label className="Login__label Profile__label">MM/YY</label>
              <input {...register("cardDate", { required: 'Введите имя' })} type='text' placeholder="00/00" className="Login__input Profile__input Profile__input-small" />
            </div>
            <div className="Profile__block-inner">
              <label className="Login__label Profile__label">CVC</label>
              <input {...register("cardCvc", { required: 'Введите имя' })} type='password' placeholder="***" className="Login__input Profile__input Profile__input-small" />
            </div>
          </div>
        </div>
        <div className="Profile__block-inner">
          <img src={CardImg} alt="CardImg"/>
        </div>
      </div>


      <input type="submit" value="Cохранить" className="Login__submit Profile__submit" />

    </form>
  )
}