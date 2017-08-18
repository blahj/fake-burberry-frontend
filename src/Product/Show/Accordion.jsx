import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SeparationLine from './SeparationLine';

const Header = styled.button`
  padding: 0 .5rem;
  width: 100%;
  border: 0;
  background: 0;
  cursor: pointer;

  @media screen and (min-width: 48rem) {
    line-height: 20px;
    padding: 0;
  }
`;

const Heading = styled.h2`
  padding: 0;
  margin: 0;
  position: relative;
  display: inline-block;
  text-align: left;
  width: 100%;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 20px;
  color: #171717;

  &::after {
    position: absolute;
    top: 5px;
    right: 0;
    height: 10px;
    width: 10px;
    content: "";
    background: url("/triangle.svg") no-repeat;
    transform: rotate( ${props => (props.isOpened ? '180deg' : '0deg')} );

    @media screen and (min-width: 48rem) {
      display: none;
    }
  }
`;

const Section = styled.section`
  padding: 0;

  @media screen and (min-width: 48rem) {
    display: ${props => (props.displayedMd ? 'block' : 'none')};
    padding: 1.5rem 0 0 0;
  }

  @media screen and (min-width: 62rem) {
    padding: 0;
  }
`;

const Content = styled.div`
  margin-top: 2rem;
  font-family: "Lora", serif;
  font-size: .875rem;
  line-height: 24px;
  color: #171717;
  display: ${props => (props.isOpened ? 'block' : 'none')};

  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
  }

  p, ul {
    margin: 0;
    padding: 0 .5rem;
    list-style-type: none;
    @media screen and (min-width: 48rem) {
      padding: 0;
    }

    @media screen and (min-width: 62rem) {
      /* margin-right: -4px; */
    }
  }
`;

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: this.props.isOpened,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    return (
      <Section displayedMd={this.props.displayedMd}>
        <Header onClick={this.handleClick}>
          <Heading isOpened={this.state.isOpened}>{this.props.name}</Heading>
        </Header>
        <Content isOpened={this.state.isOpened}>
          {this.props.children}
        </Content>
        <SeparationLine />
      </Section>
    );
  }
}

Accordion.propTypes = {
  displayedMd: PropTypes.bool,
  isOpened: PropTypes.bool,
  name: PropTypes.string,
  children: PropTypes.node,
};

Accordion.defaultProps = {
  displayedMd: false,
  isOpened: false,
  name: '',
  children: [''],
};


export default Accordion;
