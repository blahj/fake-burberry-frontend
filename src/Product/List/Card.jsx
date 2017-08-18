/* eslint-disable react/style-prop-object */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedNumber } from 'react-intl';

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  vertical-align: top;
`;

const Category = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  font-family: Raleway;
  font-size: .75rem;
  line-height: 16px;
  color: #171717;
  font-weight: 400;
`;

const Favorite = styled.button`
  margin: 0;
  padding: 0;
  height: 14px;
  width: 14px;
  border: 0;
  background: url("/heart.svg");
  cursor: pointer;
`;

const Name = styled(Link)`
  margin: 0;
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .875rem;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  color: #171717;
`;

const Color = styled.h4`
  margin: .5rem 0 0 0;
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 16px;
`;

const Button = styled(Link)`
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: #171717;
  background-color: transparent;
  text-decoration: none;
  border: transparent;
  border-bottom: 1px solid #171717;
  cursor: pointer;
`;

const Price = styled.h5`
  margin: .5rem 0 0 0;
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .75rem;
  font-weight: normal;
  line-height: 16px;
  color: #171717;
`;


const Card = props => (
  <Wrapper>
    <Link to={`/mens-clothing/${props.name}`}>
      <Img src={props.photo} />
    </Link>
    <Category>
      <Label>{props.label}</Label>
      <Favorite />
    </Category>
    <Name to={`/mens-clothing/${props.name}`}>{props.name}</Name>
    {props.colors && <Color>Available in <Button to={`/mens-clothing/${props.name}`}>{props.colors} {props.colors > 1 ? 'colours' : 'colour'}</Button></Color>}
    <Price><FormattedNumber value={props.price} style="currency" currency="RUB" /></Price>
  </Wrapper>
);

export default Card;

Card.propTypes = {
  photo: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  colors: PropTypes.number,
  price: PropTypes.number,
};

Card.defaultProps = {
  photo: '',
  label: '',
  name: '',
  colors: 0,
  price: 0,
};
