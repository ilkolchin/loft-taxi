import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateCard } from "../../actions";

import './ProfileForm.css'
import CardImg from './img/Group 45.png'


export const ProfileForm = ({useDispatchHook=useDispatch}) => {

  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = data => {
    const { cardName, cardNumber, cardDate, cardCvc } = data;
    dispatch(updateCard(cardName, cardNumber, cardDate, cardCvc));
  };


  return (
    <form className="Login__content Profile__content  " onSubmit={handleSubmit(onSubmit)}>

      <div className="Profile__block">
        <div className="Profile__block-inner">

          <label htmlFor='cardName' className="Login__label Profile__label">Имя владельца</label>
          <input {...register("cardName", { required: 'Введите имя' })} id='cardName' type='text' placeholder="Ivan Petrov" className="Login__input Profile__input" />

          <label htmlFor='cardNumber' className="Login__label Profile__label">Номер карты</label>
          <input {...register("cardNumber", { required: 'Введите номер карты' })} id='cardNumber' type='text' placeholder="**** **** **** ****" className="Login__input Profile__input" />

          <div className="Profile__block nomargin">
            <div className="Profile__block-inner nomargin">

              <label htmlFor='cardDate' className="Login__label Profile__label">MM/YY</label>
              <input {...register("cardDate", { required: 'Введите имя' })} id='cardDate' type='text' placeholder="00/00" className="Login__input Profile__input Profile__input-small" />

            </div>
            <div className="Profile__block-inner">

              <label htmlFor='cardCvc' className="Login__label Profile__label">CVC</label>
              <input {...register("cardCvc", { required: 'Введите имя' })} id='cardCvc' type='password' placeholder="***" className="Login__input Profile__input Profile__input-small" />

            </div>
          </div>
        </div>
        <div className="Profile__block-inner">
          <img src={CardImg} alt="CardImg" className='Profile__card-img'/>
        </div>
      </div>


      <input type="submit" value="Cохранить" className="Login__submit Profile__submit" />

    </form>
  )
}