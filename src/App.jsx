import React from 'react';
import { Helmet } from 'react-helmet';

import './app.css';
import Header from './Header';
import Footer from './Footer';
import Product from './Product/Show';

export default () => (
  <div>
    <Helmet>
      <title>Burberry</title>
    </Helmet>
    <Header />
    <Product />
    <Footer />
  </div>
);
