import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './containers/Navbar'
import { Footer } from './components/Footer/footer.component'
import { Texts } from './containers/MainPages/Texts'
import Typer from './containers/Typer'
import { Page } from './containers/MainPages/Page'
import { Settings } from './containers/MainPages/Settings'
import { Auth } from './containers/MainPages/Auth'


import './App.css';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/texts' exact component={Texts} />
          <Route path='/texts/type/:id' component={Typer} />
          <Route path='/' exact component={Page} />
          <Route path='/settings' exact component={Settings} />
          <Route path='/auth' exact component={Auth} />s
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
