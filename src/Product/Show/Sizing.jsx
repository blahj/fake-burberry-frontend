import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: none;

  @media screen and (min-width: 62rem) {
    display: inline-block;
    margin: 0 0 0 8.5rem; /* accuracy */
    padding: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectedSize = styled.p`
  display: inline-block;
  margin: 0;
  margin-right: 5.5rem; /* accuracy */
  padding: 0;
  font-size: .75rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  line-height: 16px;
  color: #171717;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

const Buttons = styled.div`
  margin: 0;
  margin-top: 1rem;
  padding: 0;
`;

const Button = styled.button`
  display: inline-block;
  margin: 0;
  margin-right: .5rem;
  padding: .5rem 1rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 12px;
  font-weight: ${props => (props.isSelected ? 'bold' : 'normal')};
  line-height: 16px;
  text-align: center;
  color: #171717;
  background: transparent;
  border-radius: 2px;
  border: none;
  box-shadow: inset 0px 0px 0px 1px #171717;
`;

const HelpButton = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .75rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 16px;
  color: #171717;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export default () => (
  <Section>
    <Header>
      <SelectedSize>Size: <strong>XL</strong></SelectedSize>
      <HelpButton type="button">need size help?</HelpButton>
    </Header>
    <Buttons>
      <Button>S</Button>
      <Button>M</Button>
      <Button>L</Button>
      <Button isSelected>XL</Button>
    </Buttons>
  </Section>
);
