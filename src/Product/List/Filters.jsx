import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  white-space: nowrap;

  @media screen and (min-width: 48rem) {
    margin-top: .5rem;
  }
`;

const Tip = styled.div`
  margin: 0 2rem 0 0;
  padding: 1.5rem 0;
  display: inline-block;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .75rem;
  line-height: 16px;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Filter = styled.button`
  margin-left: 1rem;
  padding: 1.5rem 0;
  display: inline-block;
  font-size: .75rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  line-height: 16px;
  border: none;
  background: transparent;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &::after {
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-left: .5rem;
    background: url("/arrow.svg");
    background-size: cover;
    content: "";
  }

  @media screen and (min-width: 48rem) {
    margin-left: 3rem;
    line-height: 16px;
  }
`;


export default () => (
  <Wrapper>
    <Tip>Refine by</Tip>
    <div>
      <Filter>Category</Filter>
      <Filter>Colour</Filter>
      <Filter>Size</Filter>
    </div>
    <Filter>Sort by price</Filter>
  </Wrapper>
);
