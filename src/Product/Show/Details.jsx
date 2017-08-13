import React from 'react';
import styled from 'styled-components';
import { IntlProvider, FormattedNumber } from 'react-intl';

import SeparationLine from './SeparationLine';
import Colors from './Colors';
import Actions from './Actions';
import Sizing from './Sizing';

const Wrapper = styled.div`
  @media screen and (min-width: 62rem) {
    /* margin-right: -8px; */
  }
`;

const Name = styled.h1`
  display: none;
  margin: 0;
  padding: 159px 0 0 0;
  font-family: "Lora", serif;
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 400;
  color: #171717;

  @media screen and (min-width: 62rem) {
    display: block;
  }
`;

const Pricing = styled.div`
  margin-top: 1rem;
  padding: 0 .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;

  @media screen and (min-width: 48rem) {
    margin: 0 0 0 0;
    padding: 0;
  }
`;

const Price = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;

  @media screen and (min-width: 62rem) {
    margin-top: .5rem;
    font-weight: 500;
  }
`;

const SupplyConditions = styled.div`
  display: none;

  @media (min-width: 62rem) {
    display: block;
    margin: 1.5rem 0 0 0;
  }
`;

const Caption = styled.h3`
  margin: 0 0 4px 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 14px;
`;

const Content = styled.p`
  margin: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 16px;
`;

const Id = styled.p`
  margin: 0;
  padding: 0;
  font-size: .75rem;
  color: #171717;
  line-height: 16px;

  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

const Appearance = styled.div`
  @media screen and (min-width: 62rem) {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    display: flex;
  }
`;

export default () => (
  <Wrapper>
    <Name>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Name>
    <Pricing>
      <Price>
        <IntlProvider locale="en">
          <FormattedNumber value={110000} style="currency" currency="RUB" />
        </IntlProvider>
      </Price>
      <Id>Item 39428531</Id>
    </Pricing>
    <Appearance>
      <Colors />
      <Sizing />
    </Appearance>
    <Actions />
    <SupplyConditions>
      <Caption>Free Next Day Delivery</Caption>
      <Content>Order before 7pm Monday to Thursday for delivery the next day</Content>
    </SupplyConditions>
    <SeparationLine />
  </Wrapper>
);
