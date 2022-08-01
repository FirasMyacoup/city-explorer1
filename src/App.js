
import './App.css';
import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Searched: false,
      Input: '',
      cityData: {},
      error: [],
      cityName: '',
      latitude: '',
      longitude: '',
    };
  }
  showSearch = () => {
    this.setState({ Searched: false });
  }
  
  handleSearch = async (Input) => {
    
    try {
      let Response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${cityInput}&format=json&limit=1`);
      
      console.log('display name', Response.data[0].display_name);
      console.log('latitude', Response.data[0].lat);
      console.log('longitude', Response.data[0].lon);

      this.setState({
        haveSearched: true,
        Input: Input,
        cityData: Response.data[0],
        cityName: Response.data[0].display_name,
        latitude: Response.data[0].lat,
        longitude: Response.data[0].lon,
      });


} 
catch (err) {
  
  this.setState({
    errors: `${err}`,
    haveSearched: false

});
}
  }
}




 

export default App;
