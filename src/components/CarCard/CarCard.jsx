import React from "react";

import car from './CarCard.module.scss'

const CarCard = (props) => (
  <div>
    <label>
      <input type="radio" name='car' className={car.checkbox} />
      <div className={car.inner}>
        <h5 className={car.name}>{props.name}</h5>
        <div className={car.info}>Стоимость</div>
        <div className={car.price}>{props.price}₽</div>
        <img className={car.img} src={props.img} alt="Car" />
      </div>
    </label>
  </div>
)

export default CarCard;