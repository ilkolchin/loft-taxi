import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { askForAddress, askForRoute } from "../../actions";

import { TextField, Autocomplete } from "@mui/material";
import './Order.scss'
import car1 from './img/car1.png'
import car2 from './img/car2.png'
import car3 from './img/car3.png'

import CarCard from "../CarCard/CarCard";


class Order extends React.Component {

  componentDidMount() {
    this.props.askForAddress();
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { from, to } = event.target;
    await this.props.askForRoute(from.value, to.value);
  }

  render() {
    return <>
      {this.props.isCardUpdated ?
        <form className='Route' onSubmit={this.handleSubmit}>
          <div className="Route__inputs">
            <div className="Route__input">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={this.props.addresses}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Откуда" name='from' />}
              />
            </div>
            <div className="Route__input">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={this.props.addresses}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Куда" name='to' />}
              />
            </div>
          </div>
          <div className="Route__cars">
            <ul className='Cars'>
              <li className='Car__item'>
                <CarCard name='Стандарт' price='150' img={car1} />
              </li>
              <li className='Car__item'>
                <CarCard name='Комфорт' price='250' img={car3} />
              </li>
              <li className='Car__item'>
                <CarCard name='Премиум' price='300' img={car2} />
              </li>
            </ul>
            <input type="submit" value="Заказать" className='Login__submit nomargin' />
          </div>
        </form>
        :
        <><h1 className="Route Route__error">Ошибка карты</h1>
          <h5 className='Route Route__error-info'>Введите платёжные данные</h5>
          <Link to='/profile' className=" Route Login__submit Route__error-btn">Перейти в профиль</Link>
        </>
      }
    </>
  }
}

export default connect(
  (state) => ({
    isCardUpdated: state.card.isCardUpdated,
    addresses: state.address.addresses,
  }),
  { askForAddress, askForRoute }
)(Order)