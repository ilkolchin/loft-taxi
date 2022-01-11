import React from "react";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import { askForAddress, askForRoute, askForCard, clearRoute } from '../../actions'
import { drawRoute } from "./drawRoute";

import Order from "../Order/Order";

import '../../../node_modules/mapbox-gl/src/css/mapbox-gl.css'
import style from './Map.module.css'

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

  render() {
    return <div className={style.wrapper} >
      <div className={style.inner} ref={this.mapContainer} />
      <Order/>
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