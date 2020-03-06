import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <Route exact path='/' component={MovieList}/>
        <Route path='/details' component={MovieDetails}/>
      </Router>
    );
  }
}

export default App;
