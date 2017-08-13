import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 1.5rem;
  display: none;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .75rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  vertical-align: middle;

  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

const ImageDesktop = styled.img`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
`;

const Heading = styled.h2`
  padding: 0;
  margin: 0 0 1rem 0;
  position: relative;
  display: inline-block;
  text-align: left;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 19px;
  color: #171717;

  @media screen and (min-width: 62rem) {
    margin-top: 4rem;
  }
`;

const Caption = styled.h3`
  margin: 0 0 .25rem 0;
  padding: 0;
  font-size: .75rem;
  font-weight: 700;
  line-height: 14px;
`;

const Content = styled.p`
  margin: 0 0 24px 0;
  padding: 0;
  font-size: .75rem;
  line-height: 16px;
  color: #171717;
`;

export default () => (
  <Section>
    <div className="row">
      <div className="col-md-7">
        <Image
          src="/pictures/product-delivery-image.jpg"
          srcSet="/pictures/product-delivery-image@2x.jpg
          2x,/pictures/product-delivery-image@3x.jpg 3x"
          alt="product delivery"
        />
        <ImageDesktop
          src="/pictures/delivery-desktop.jpg"
          alt="product delivery"
        />
      </div>
      <div className="col-md-5 col-lg-offset-1 col-lg-4">
        <Heading>delivery</Heading>
        <Caption>Free Next Day Delivery</Caption>
        <Content>
          Order before 7pm Monday to Thursday for delivery the next day
        </Content>
        <Caption>Collect-in-Store</Caption>
        <Content>
          Order online today and pick up your items in store as early as tomorrow
        </Content>
        <Caption>Free Returns</Caption>
        <Content>
          Enjoy free returns on your order
        </Content>
        <Caption>Free Gift Packaging</Caption>
        <Content>
          Discover our gift packaging, a gold lined box tied with a coloured ribbon
        </Content>
      </div>
    </div>
  </Section>
);
