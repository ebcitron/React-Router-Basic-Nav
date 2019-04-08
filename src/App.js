import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
      <Navigation />
      <div className='Routers'>
        <Route exact path = '/' component = {Home} />
        <Route path = '/About' component = {About} />
        <Route path = '/Contact' component = {Contact} />

      </div>
  </div>
);

export default App;
