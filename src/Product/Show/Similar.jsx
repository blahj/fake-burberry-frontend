import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 1rem 0 0 0;
  padding: 0 .5rem;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Heading = styled.h2`
  margin: 0 0 1.5rem 0;
  padding-bottom: .5rem;
  display: inline-block;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 19px;
  font-size: 1rem;
  color: #171717;
  border-bottom: solid 1px #171717;
`;

const Link = styled.a`
  margin: 0 0 1rem 0;
  display: block;
  font-family: "Lora", serif;
  font-size: .875rem;
  font-style: italic;
  text-decoration: none;
  line-height: 17px;
  color: #171717;
`;

export default () => (
  <Section>
    <Heading>more for you</Heading>
    <Link href="/">Men’s Black Trench Coats</Link>
    <Link href="/">Men’s Short Trench Coats</Link>
    <Link href="/">Men’s Long Trench Coats</Link>
  </Section>
);
