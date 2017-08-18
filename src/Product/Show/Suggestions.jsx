/* eslint-disable react/style-prop-object */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedNumber } from 'react-intl';

const Section = styled.section`
  margin: 3rem 0 0 0;
  padding: 0;

  @media screen and (min-width: 48rem) {
    margin-top: 3rem;
    padding: 0;
  }

  @media screen and (min-width: 62rem) {
    margin-top: 4rem;
    padding: 0;
  }
`;

const Heading = styled.h2`
  margin: 0 0 0 .5rem;
  padding-bottom: .5rem;
  display: inline-block;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  line-height: 19px;
  color: #171717;
  border-bottom: 1px solid #171717;

  @media screen and (min-width: 48rem) {
    margin: 0;
    padding-bottom: 0;
    text-align: center;
    border-bottom: 0;
  }

  @media screen and (min-width: 62rem) {
    display: block;
  }
`;

const Cards = styled.div`
  padding: 1.5rem .5rem 0 .5rem;

  @media screen and (min-width: 48rem) {
    padding: 1rem 0 0 0;
  }

  @media screen and (min-width: 62rem) {
    padding: 2rem 0 0 0;
  }
`;

const Card = styled(Link)`
  margin: 0 0 2rem 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-decoration: none;

  @media screen and (min-width: 48rem) {
    margin: 0;
    padding: 0;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
`;

const Name = styled.h3`
  margin: .5rem 0 0 0;
  padding: 0;
  font-family: "Lora", serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 19px;
  color: #111111;

  @media screen and (min-width: 62rem) {
    margin-top 1rem;
    font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial";
    font-size: .75rem;
    font-weight: 600;
    line-height: 20px;
    color: #171717;
  }
`;

const Price = styled.h5`
  margin: .5rem 0 0 0;
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial";
  font-size: .75rem;
  font-weight: normal;
  line-height: 14px;
  color: #999999;
`;

const suggestions = [
  {
    id: 1,
    name: 'Emroided Hooded',
    price: 27000,
    href: '/mens-clothing/emroided-hooded',
    img: '/pictures/suggest-photo-1.jpg',
  },
  {
    id: 2,
    name: 'Relaxed Fit Stretch Jeans',
    price: 22500,
    href: '/mens-clothing/relaxed-fit-stretch-jeans',
    img: '/pictures/suggest-photo-2.jpg',
  },
  {
    id: 3,
    name: 'Leather and House',
    price: 120000,
    href: '/mens-clothing/leather-and-house',
    img: '/pictures/suggest-photo-3.jpg',
  },
  {
    id: 4,
    name: 'Leather Wingtip',
    price: 46000,
    href: '/mens-clothing/leather-wingtip',
    img: '/pictures/suggest-photo-4.jpg',
  },
];

export default () => (
  <Section>
    <Heading>we recommend</Heading>
    <Cards>
      <div className="row">
        {suggestions.map(item => (
          <div className="col-xs-6 col-md-3" key={item.id}>
            <Card to={item.href}>
              <Photo src={item.img} alt={item.name} />
              <Name>{item.name}</Name>
              <Price>
                <FormattedNumber value={item.price} style="currency" currency="RUB" />
              </Price>
            </Card>
          </div>
        ))}
      </div>
    </Cards>
  </Section>
);
