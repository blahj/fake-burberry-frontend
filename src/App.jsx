import React from 'react';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';

import './App.css';
import Header from './Header';
import Footer from './Footer';
import Product from './Product/Show';

export default () => (
  <IntlProvider locale="en">
    <div>
      <Helmet>
        <title>Burberry</title>
      </Helmet>
      <Header />
      <Product />
      <Footer />
    </div>
  </IntlProvider>
);
