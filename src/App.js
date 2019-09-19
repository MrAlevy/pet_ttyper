import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './containers/Navbar'
import { Texts } from './containers/Texts'
import { MyPage } from './containers/MyPage'
import { Settings } from './containers/Settings'
import { Auth } from './containers/Auth'


import './App.css';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/texts' exact component={Texts} />
          <Route path='/' exact component={MyPage} />
          <Route path='/settings' exact component={Settings} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      </div>
    </Router>
  );
}
