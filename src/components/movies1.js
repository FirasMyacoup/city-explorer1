import React from 'react';

import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';


import Movie from './Movie';

class Movies extends React.Component {
  render() {
    // console.log('movie data mic check!');
    if (this.props.movies.length === 0) {
      return ('');
    }
    return (
      <>
        <Container>
          <h1> films: </h1>
          {
            this.props.movies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))
          }
        </Container>
      </>
    );
  }
}

export default Movies;