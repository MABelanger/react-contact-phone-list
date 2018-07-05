import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../app/AppContainer';

const RootComponent = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path='/a' component={App} />
    </Router>
  </Provider>
);

export default RootComponent;
