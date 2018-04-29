/*global google*/
import React, { Component } from 'react';
import '../../assets/css/map.css';

const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");
const demoFancyMapStyles = require("../../assets/styles/demoFancyMapStyles.json");

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100vh` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(51.498246, -0.129274),
        destination: new google.maps.LatLng(51.302181, -0.717972),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
    <GoogleMap
        defaultZoom={15}
        defaultOptions={{ styles: demoFancyMapStyles }}
        defaultCenter={new google.maps.LatLng(51.476012, 0.149261)}
    >
    {props.directions && <DirectionsRenderer 
        directions={props.directions}
        options={{
            suppressMarkers: true,
            polylineOptions: { strokeColor: 'white'}
        }}
        defaultCenter={new google.maps.LatLng(51.476012, 0.149261)}
    />}
  </GoogleMap>
);

class DirectionMap extends Component {
    render() {
        return (
            <div className="google-map-container">
                <MapWithADirectionsRenderer />
            </div>
        )
    }
}

export default DirectionMap;