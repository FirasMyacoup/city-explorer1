'use strict';

import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import WeatherDay from './WeatherDay';
import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends React.Component {

  render() {
   
    if (this.props.forecast.length === 0) {
      return ('');
    }
    return (
      <div>
        <h1> the Weather will be : </h1>
        <CardDeck>
          {this.props.forecast.map((day, index) => (
            <WeatherDay key={index} day={day} />
          ))}
        </CardDeck>
      </div>
    );
  }
}


export default Weather;