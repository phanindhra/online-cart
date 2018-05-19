import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Routes from './Router';

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
      </ul>
    </nav>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Routes/>
      </div>
    );
  }
}

export default App;
