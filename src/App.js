import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './containers/Navbar'
import { Main } from './containers/Main'
import { Stats } from './containers/Stats'
import { Texts } from './containers/Texts'

import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/stats' component={Stats} />
          <Route exact path='/texts' component={Texts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
