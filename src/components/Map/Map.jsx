import React from "react";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { askForAddress, askForRoute, askForCard, clearRoute } from '../../actions'
import { drawRoute } from "./drawRoute";

import '../../../node_modules/mapbox-gl/src/css/mapbox-gl.css'
import './Map.scss'
import { Autocomplete, TextField } from "@mui/material";
import car1 from './img/car1.png'
import car2 from './img/car2.png'
import car3 from './img/car3.png'

class Map extends React.Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1Ijoia29sY2hpbiIsImEiOiJja3VzYnJzNHAwczBoMnVsbmFkcGppdm0xIn0.1ZtagRkMF2EhT-7z47UR0w";

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 12,
      attributionControl: false
    });

    this.props.askForCard();
    this.props.askForAddress();
  }

  componentWillUnmount() {
    this.map.remove();
    this.props.clearRoute();
  }

  componentDidUpdate() {
    if (this.props.route.length !== 0) {
      drawRoute(this.map, this.props.route);
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { from, to } = event.target;
    await this.props.askForRoute(from.value, to.value);
  }

  render() {


    return <div className="Map__wrapper" >
      <div className="Map" ref={this.mapContainer} />
      <form className='Route' onSubmit={this.handleSubmit}>
        {this.props.isCardUpdated ?
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
          </div> :
          <><h1 className="Route__error">Ошибка карты</h1>
            <h5 className='Route__error-info'>Введите платёжные данные</h5></>}
        {this.props.isCardUpdated ?
          <div className="Route__cars">
            <ul className='Cars'>
              <li className='Car__item'>
                <label>
                  <input type="radio" name='car' id="car" />
                  <div className="Car">
                    <h5 className='Car__name'>Стандарт</h5>
                    <div className="Car__info">Стоимость</div>
                    <div className="Car__price">150₽</div>
                    <img className='Car__img' src={car1} alt="Car" />
                  </div>
                </label>
              </li>
              <li className='Car__item'>
                <label>
                  <input type="radio" name='car' id="car" />
                  <div className="Car">
                    <h5 className='Car__name'>Премиум</h5>
                    <div className="Car__info">Стоимость</div>
                    <div className="Car__price">250₽</div>
                    <img className='Car__img' src={car2} alt="Car" />
                  </div>
                </label>
              </li>
              <li className='Car__item'>
                <label>
                  <input type="radio" name='car' id="car" />
                  <div className="Car">
                    <h5 className='Car__name'>Бизнес</h5>
                    <div className="Car__info">Стоимость</div>
                    <div className="Car__price">300₽</div>
                    <img className='Car__img' src={car3} alt="Car" />
                  </div>
                </label>
              </li>
            </ul>
            <input type="submit" value="Заказать" className='Login__submit nomargin' />
          </div> :
          <Link to='/profile' className="Login__submit Route__error-btn">Перейти в профиль</Link>}
      </form>
    </div>
  }
}

export default connect(
  (state) => ({
    isCardUpdated: state.card.isCardUpdated,
    addresses: state.address.addresses,
    route: state.route.route
  }),
  { askForAddress, askForRoute, askForCard, clearRoute })
  (Map);