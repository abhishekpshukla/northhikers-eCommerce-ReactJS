import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// import components
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;
