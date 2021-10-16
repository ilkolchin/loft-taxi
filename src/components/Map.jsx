import React from "react";
import mapboxgl from "mapbox-gl";


export class Map extends React.Component {
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
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div className="Map__wrapper" >
      <div className="Map" ref={this.mapContainer} />
    </div>
  }
}