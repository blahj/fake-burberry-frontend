import React from 'react';
import styled from 'styled-components';

const Photos = styled.section`
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;
  display: block;
  left: 50%;
  right: 50%;
  width: 100vw;
  white-space: nowrap;
  overflow-x: scroll;
  font-size: 0px;

  @media screen and (min-width: 48rem) {
    margin: 0;
    position: inherit;
    width: 100%;
  }

  @media screen and (min-width: 62rem) {
    margin: 0 -0.5rem;
  }
`;

const Photo = styled.img`
  height: 400px;
  width: auto;

  @media screen and (min-width: 48rem) {
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 62rem) {
    margin: 0;
    position: inherit;
    height: 651px;
    width: auto;
  }
`;

export default () => (
  <Photos>
    <Photo
      src="/pictures/product-photo-1.jpg"
      srcSet="/pictures/product-photo-1@2x.jpg 2x,/pictures/product-photo-1@3x.jpg 3x"
      alt="first"
    />
    <Photo
      src="/pictures/product-photo-2.jpg"
      srcSet="/pictures/product-photo-2@2x.jpg 2x,/pictures/product-photo-2@3x.jpg 3x"
      alt="second"
    />
    <Photo
      src="/pictures/product-photo-3.jpg"
      srcSet="/pictures/product-photo-3@2x.jpg 2x,/pictures/product-photo-3@3x.jpg 3x"
      alt="third"
    />
    <Photo
      src="/pictures/product-photo-4.jpg"
      srcSet="/pictures/product-photo-4@2x.jpg 2x,/pictures/product-photo-4@3x.jpg 3x"
      alt="fourth"
    />
  </Photos>
);
