import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from 'components';
import Home from 'pages/Home/Home';
import Feeds from 'pages/Feeds/Feeds';

const App = () => (
  <Router>
    <Header theme='dark' brand='React Workshop Lab' links={['home', 'feeds']} />
    <Switch>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/feeds'>
        <Feeds />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
