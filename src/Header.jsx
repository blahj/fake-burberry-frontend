import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  /* border-bottom: solid 1px #c6c6c6; */
  display: block;
`;

const Img = styled.img`
  display: block;
  height: 0.75rem;
  margin: 18px auto;

  @media screen and (min-width: 48rem) {
    margin: 1.5rem auto;
    height: 1rem;
  }

  @media screen and (min-width: 62rem) {
    margin: 2rem auto;
  }
`;

const Hamburger = styled.button`
  margin: 18px 0;
  padding: 0;
  width: 16px;
  height: 10px;
  vertical-align: center;
  background: url("/hamburger.svg") no-repeat;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const LocationSelector = styled.button`
  margin: 0;
  padding: 0;
  display: none;
  font-size: .75rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  line-height: 16px;
  border: none;
  background: transparent;
  cursor: pointer;

  &::after {
    margin-left: .5rem;
    width: 12px;
    height: 6px;
    display: inline-block;
    background: url("/arrow.svg");
    background-size: cover;
    content: "";
  }

  @media screen and (min-width: 48rem) {
    margin: 1.5rem 0;
    display: inline-block;
  }

  @media screen and (min-width: 62rem) {
    margin: 2rem 0;
  }
`;


const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 48rem) {
    display: flex;
    justify-content: center;
  }
`;


const NavLink = styled(Link)`
  padding: 1rem;
  display: inline-block;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  color: #999;
  border-bottom: 1px solid transparent;

  ${props => (props.active && css`
    color: #171717;
    border-bottom: solid 1px #171717;
  `)}
`;

export default () => (
  <Header>
    <div className="container">
      <div className="row">
        <div className="col-xs-2 col-md-4">
          <Hamburger />
          <LocationSelector>Shopping in: United Kingdom (£)</LocationSelector>
        </div>
        <div className="col-xs-8 col-md-4">
          <Link to="/">
            <Img src="/logo.svg" alt="BURBERRY" />
          </Link>
        </div>
      </div>
      <Nav>
        <NavLink to="/">Women</NavLink>
        <NavLink to="/mens-clothing/" active>Men</NavLink>
        <NavLink to="/">Children</NavLink>
        <NavLink to="/">Beauty</NavLink>
        <NavLink to="/">Experience</NavLink>
      </Nav>
    </div>
  </Header>
);
