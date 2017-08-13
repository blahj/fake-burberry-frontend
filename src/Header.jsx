import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px #c6c6c6;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
  }

  @media screen and (min-width: 62rem) {
    padding: 2rem 0;
    border-bottom: 0;
  }
`;

const HeaderLink = styled.a`
  line-height: 10px;
`;

const Img = styled.img`

  @media screen and (min-width: 62rem) {
    height: 16px;
  }
`;

export default () => (
  <Header>
    <HeaderLink href="/">
      <Img src="/logo.svg" alt="BURBERRY" />
    </HeaderLink>
  </Header>
);
