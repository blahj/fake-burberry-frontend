import React from 'react';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';
import Header from './Header';
import Footer from './Footer';
import Show from './Product/Show';
import List from './Product/List';

export default () => (
  <IntlProvider locale="en">
    <Router>
      <div>
        <Helmet>
          <title>Burberry</title>
        </Helmet>
        <Header />
        <Route exact path="/" component={List} />
        <Route exact path="/mens-clothing/" component={List} />
        <Route path="/mens-clothing/:name" component={Show} />
        <Footer />
      </div>
    </Router>
  </IntlProvider>
);
