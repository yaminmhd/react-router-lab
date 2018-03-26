import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MyApp from './MyApp';
import NavLinks from './NavLinks';
import TwitterFeed from './TwitterFeed';
import TacosFeed from './TacosFeed';
import TacoDetail from './TacoDetail';
import SpecialTacoPage from './SpecialTacoPage';
import ErrorPage from './ErrorPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLinks />
          <Switch>
            <Route exact path='/' component={MyApp} />
            <Route exact path='/tacos' component={TacosFeed} />
            <Route path='/tacos/:id' component={TacoDetail} />
            <Route path='/specialTacoPage' component={SpecialTacoPage}/>
            <Route path='/twitter' component={TwitterFeed} />
            <Route component={ErrorPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
