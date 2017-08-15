import React from 'react';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';

import Photos from './Photos';
import Details from './Details';
import Delivery from './Delivery';
import Suggestions from './Suggestions';
import Similar from './Similar';
import Accordion from './Accordion';

const Name = styled.h1`
  margin: 1rem .5rem;
  padding: 0;
  font-family: "Lora", serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 24px;
  color: #171717;

  @media screen and (min-width: 48rem) {
    margin: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 28px;
  }

  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

const Section = styled.section`
  @media screen and (min-width: 62rem) {
    background: #d4bdad;
  }
`;

const Info = styled.section`
  @media screen and (min-width: 62rem) {
    margin-top: 4rem;
  }
`;

const Img = styled.img`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
    width: 100%;
  }
`;

const Particulars = styled.section`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
    margin: 4rem 0;
  }
`;

const Part = styled.img`
  display: block;
  min-width: 100%;

  ${props => (props.center && css`
    margin-top: 2rem;
  `)}

  ${props => (props.bottom && css`
    margin-top: 6rem;
  `)}
`;

export default () => (
  <main>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
    </Helmet>
    <Section>
      <div className="container">
        <Name>Long Cotton Gabardine Car Coat</Name>
        <div className="row">
          <div className="col-xs-12 col-md-7 col-lg-6">
            <Photos />
          </div>
          <div className="col-xs-12 col-md-5 col-lg-6">
            <Details />
          </div>
        </div>
      </div>
    </Section>
    <Info>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <Accordion isOpened displayedMd name="description">
              <p>A refined car coat crafted in protective cotton gabardine.</p>
              <p>
                Invented by Thomas Burberry in 1879, cotton gabardine is
                a tightly woven and breathable fabric that protects against wind and rain.
              </p>
              <p>
                Raglan sleeves and a concealed button closure
                complement the clean tailored lines.
              </p>
              <p>The piece is finished with a distinctive check undercollar.</p>
              <br />
              <p>
                Coat length: 98cm/38.6in. This is based on a size UK 48 as
                proportions change slightly according to size.
              </p>
              <ul>
                <li>Outer: 100% cotton</li>
                <li>Check lining: 100% cotton</li>
                <li>Sleeve lining: 100% viscose</li>
                <li>Buttons: buffalo horn</li>
                <li>Specialist dry clean</li>
                <li>Made in Europe</li>
                <li>Item 39428531</li>
              </ul>
            </Accordion>
          </div>
          <div className="col-lg-8">
            <Img src="/pictures/description-photo.jpg" alt="enlarged photo of the coat" />
          </div>
        </div>
        <Particulars>
          <div className="row">
            <div className="col-lg-4">
              <Part center src="/pictures/photo-1.jpg" alt="enlarged clasp" />
            </div>
            <div className="col-lg-4">
              <Part bottom src="/pictures/photo-2.jpg" alt="back of the coat" />
            </div>
            <div className="col-lg-4">
              <Part src="/pictures/photo-3.jpg" alt="collar" />
            </div>
          </div>
        </Particulars>
        <Accordion name="shipping &amp; returns" />
        <Delivery />
        <Suggestions />
        <Similar />
      </div>
    </Info>
  </main>
);
