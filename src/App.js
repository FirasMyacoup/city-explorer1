
import './App.css';
import React from 'react';



import axios from 'axios';
import City from './Components/City/City.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      cityInput: '',
      cityData: {},
      cityName: '',
      latitude: '',
      longitude: '',
    }
  };


}

export default App;
