/*global google*/
import React, { Component } from 'react';
import '../../assets/css/map.css';

const { compose, withProps, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
const baseFancyMapStyles = require("../../assets/styles/truckFancyMapStyles.json");

const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100vh` }} />,
    center: { lat: 51.302181, lng: -0.717972 }
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={props.center}
    defaultOptions={{ styles: baseFancyMapStyles }}
  >
  <Marker
    position={{ lat: 51.302181, lng: -0.717972 }}
  />
  </GoogleMap>
);

class BaseMap extends Component {
    render() {
        return (
            <div className="google-map-container">
                <StyledMapWithAnInfoBox />
            </div>
        )
    }
}

export default BaseMap;