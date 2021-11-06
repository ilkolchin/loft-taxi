import React from "react";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import { Autocomplete, TextField, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom'
import { askForAddress, askForRoute, askForCard } from '../actions'
import { drawRoute } from "../drawRoute";

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
      {this.props.isCardUpdated ?
        <>
          <form onSubmit={this.handleSubmit}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={this.props.addresses}
              sx={{ width: 300, position: 'absolute', top: '2%', left: '2%', background: '#fff' }}
              renderInput={(params) => <TextField {...params} label="Откуда" name='from' />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={this.props.addresses}
              sx={{ width: 300, position: 'absolute', top: '10%', left: '2%', background: '#fff' }}
              renderInput={(params) => <TextField {...params} label="Куда" name='to' />}
            />
            <Button sx={{ position: 'absolute', top: '18%', left: '2%', background: '#fff' }} type='submit'
            >Вызвать такси</Button>
          </form>
        </>
        :
        <>
          <div style={{ position: "absolute", top: '2%', left: '2%' }}>
            <Typography fontSize='18px' align='center' sx={{ marginBottom: '25px' }}>Введите платежные данные</Typography>
            <Link to='/profile' className="Login__submit">Перейти в профиль</Link>
          </div>
        </>
      }
    </div>

  }
}

export default connect(
  (state) => ({
    isCardUpdated: state.card.isCardUpdated,
    addresses: state.address.addresses,
    route: state.route.route
  }),
  { askForAddress, askForRoute, askForCard })
  (Map);