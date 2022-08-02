
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

fetchMovies = async () => {
  try {
    const movieInformation = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies`,
      {
        params: {
          location: this.state.cityInput
        }
      });

    this.setState({
      movies: movieInformation.data
    });
  } catch (error) {
    this.setState({ errors: `${error.message}` });
  
  }
}
render() 

  return (
    <>
      <Header />
      {
        this.state.haveSearched && this.state.errors.length === 0 ?
          <City handleShowSearch={this.showSearch} cityData={this.state.cityData} /> :
          this.state.errors.length !== 0 ?
            <Error handleSearch={this.handleSearch} errors={this.state.errors} error={this.state.error} /> :
            <Search handleSearch={this.handleSearch} />
      }
      <Container>
        <Weather handleShowSearch={this.showSearch} forecast={this.state.forecast} />
      </Container>
      <Container>
        <Movies handleShowSearch={this.showSearch} movies={this.state.movies} />
      </Container>
      <Footer />
    </>
);
    


    
      
      
      
  



 

export default App;
