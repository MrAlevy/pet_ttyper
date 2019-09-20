import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './containers/Navbar'
import { Footer } from './components/Footer/footer.component'
import { Texts } from './containers/Texts'
import { Page } from './containers/Page'
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
          <Route path='/' exact component={Page} />
          <Route path='/settings' exact component={Settings} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
