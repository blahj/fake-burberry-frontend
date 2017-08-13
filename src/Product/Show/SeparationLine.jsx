import React from 'react';
import styled from 'styled-components';

const Line = styled.hr`
  margin: 2rem -50vw 2rem -50vw;
  padding: 0;
  position: relative;
  left: 50%;
  right: 50%;
  width: 100vw;
  height: 1px;
  background-color: #c6c6c6;
  border: none;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () => (
  <Line />
);
