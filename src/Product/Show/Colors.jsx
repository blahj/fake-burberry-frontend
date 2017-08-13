import React from 'react';
import styled from 'styled-components';

const Line = styled.hr`
  margin: 2rem 0;
  height: 1px;
  background: #c6c6c6;
  border: 0;

  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

const Section = styled.div`
  margin-top: 1rem;

  @media screen and (min-width: 62rem) {
    display: inline-block;
    margin-top: 0;
    /* margin-left: 1px; */
  }
`;

const SelectedColor = styled.p`
  margin: 0;
  padding: 0 .5rem;
  font-size: .75rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  line-height: 16px;
  color: #171717;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }

  @media screen and (min-width: 62rem) {
  }
`;

const Buttons = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding-left: .5rem;
  display: flex;
  font-size: 0;

  @media screen and (min-width: 48rem) {
    padding-left: 0;
  }

  @media screen and (min-width: 62rem) {
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  margin-right: 1rem;
  display: block;
  height: 40px;
  width: 40px;
  background: ${props => (props.color ? props.color : 'transparent')};
  border-radius: 100px;
  border: solid 1px ${props => (props.active ? '#232122' : 'transparent')};
  cursor: pointer;
`;

export default () => (
  <Section>
    <SelectedColor>Colour: <strong>Honey</strong></SelectedColor>
    <Buttons>
      <Button color="black" type="button" name="black">select black</Button>
      <Button active color="#cfa880" type="button" name="honey">select honey</Button>
    </Buttons>
    <Line />
  </Section>
);
