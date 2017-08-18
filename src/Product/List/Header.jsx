import React from 'react';
import styled from 'styled-components';

import Filters from './Filters';

const Section = styled.section`
  padding-top: 2rem;
  background: #f3f3f3;

  @media screen and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;

const Heading = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Lora", serif;
  font-size: 26px;
  font-weight: normal;
  line-height: 32px;
  color: #171717;
  `;

const Description = styled.p`
  margin: 1rem 0 .5rem 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .75rem;
  line-height: 20px;
  color: #171717;
  opacity: .87;
`;

const Link = styled.a`
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: ${props => (props.bold ? '600' : '400')};
  font-size: .75rem;
  color: #171717;
  border-bottom: solid 1px #171717;
`;

export default () => (
  <Section>
    <div className="container">
      <Heading>Men’s Clothing</Heading>
      <div className="row">
        <div className="col-xs-12 col-md-9 col-lg-7">
          <Description>Explore our menswear collection for the season.
           Sculptural knitwear, <Link>sweatshirts</Link>, artist overalls and
           oversized cabans feature alongside our signature trench coat
           in both heritage and seasonal <Link to="/" bold>More</Link>
          </Description>
        </div>
      </div>
      <Filters />
    </div>
  </Section>
);
