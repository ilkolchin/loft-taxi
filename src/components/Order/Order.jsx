import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { askForAddress, askForRoute } from "../../actions";

import { TextField, Autocomplete } from "@mui/material";
import CarCard from "../generic/CarCard/CarCard";
import { LinkBtn } from "../generic/buttons/LinkBtn/LinkBtn";

import style from './Order.module.scss'
import car1 from './img/car1.png'
import car2 from './img/car2.png'
import car3 from './img/car3.png'


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
        <form className={style.content} onSubmit={this.handleSubmit}>
          <div>
            <div className={style.input}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={this.props.addresses}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Откуда" name='from' />}
              />
            </div>
            <div className={style.input}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={this.props.addresses}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Куда" name='to' />}
              />
            </div>
          </div>
          <div className={style.wrapper}>
            <ul className={style.list}>
              <li className={style.item}>
                <CarCard name='Стандарт' price='150' img={car1} />
              </li>
              <li className={style.item}>
                <CarCard name='Комфорт' price='250' img={car3} />
              </li>
              <li className={style.item}>
                <CarCard name='Премиум' price='300' img={car2} />
              </li>
            </ul>
            <input type="submit" value="Заказать" className='Login__submit nomargin' />
          </div>
        </form>
        :
        <><div className={style.content}>
          <h1 className={style.error}>Ошибка карты</h1>
            <h5 className={style.error_info}>Введите платёжные данные</h5>
            <LinkBtn to='/profile' text='Перейти в профиль' theme='default'/>
        </div>
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