import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 48rem) {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: #171717;
  background-color: transparent;
  border: 0;
  border-radius: 2px;
  box-shadow: inset 0px 0px 0px 1px #171717;
  cursor: pointer;
`;

const Heading = styled.h2`
  margin: 0 0 1rem 0;
  padding: 0;
  line-height: 20px;
  font-family: "Lora", serif;
  font-size: 1rem;
  font-weight: normal;
  color: #171717;

  @media screen and (min-width: 48rem) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

export default () => (
  <Wrapper>
    <Heading>Showing 8 of 17</Heading>
    <Button type="button">View 9 More</Button>
  </Wrapper>
);
