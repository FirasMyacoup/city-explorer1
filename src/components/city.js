import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


class City extends React.Component {
  render() {
    
    return (
      <>
        <Button onClick={this.props.handleShowSearch} variant="primary" type="search">
          Search again
        </Button>
        <h2>{this.props.Data.name}</h2>
        <h3>Latitude: {this.props.cityData.Latitude}</h3>
        <h3>Longitude: {this.props.cityData.Longitude}</h3>
        <Image src={`${process.env.REACT_APP_LOCATIONIQ_KEY}=${this.props.cityData.lat},${this.props.cityData.lon}`} alt="city map"/>
      </>
    );
  }
}

export default City;