import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Home } from './Home/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Home />
        </div>
      </Router>

    );
  }

}

export default App;
