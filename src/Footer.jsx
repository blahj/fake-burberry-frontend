import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  margin: 4rem 0 0 0;
  padding: 2rem .5rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  background-color: #f3f3f3;

  @media screen and (min-width: 48rem) {
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: 61rem) {
    padding: 4rem .5rem;
    margin-bottom: 1rem; /* note: move footer to 16px from lower bound of the screen */
  }
`;

const FooterMenu = styled.div`
  display: none;

  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

const NavTitle = styled.h4`
  margin: 0 0 1rem 0;
  padding: 0;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
  color: #171717;
`;

const NavLink = styled.a`
  margin-bottom: .75rem;
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  color: #999999;
  text-decoration: none;
`;

const FooterButtons = styled.div`
  margin: 1px 0 -1px 0; /* slightly tighten links to match zpl */
  padding: 0;

  @media screen and (min-width: 48rem) {
    margin: 1rem 0 0 0;
    padding: 0;
  }
`;

const FooterButton = styled.button`
  margin: 0 0 1rem 0;
  padding: 0;
  display: block;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .75rem;
  line-height: 1.33;  /* 1.33 */
  background: transparent;
  color: #999;
  border: 0;

  @media screen and (min-width: 48rem) {
    margin: 0;
    margin-right: 1.5rem;
    line-height: 2;
    display: inline-block;
  }
`;

const FooterHelpers = styled.div`
  margin: 0;
  padding: 0;
  display: block;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const HelpersTitle = styled.h4`
  margin: 1.5rem 0 1rem 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 700;  /* font-weight: 700; */
  text-align: center;
  line-height: 1.5;
  color: #171717;
`;

const HelpersLink = styled.a`
  margin: 1rem 0 0 0;
  display: block;
  font-family: "Lora", serif;
  font-size: .875rem;
  font-weight: 400;
  font-style: italic;
  text-align: center;
  text-decoration: none;
  line-height: 12px; /* 1.21 */
  color: #171717;
`;

export default () => (
  <Footer>
    <div className="container">
      <FooterMenu>
        <div className="row">
          <div className="col-md-3">
            <NavTitle>customer service</NavTitle>
            <nav>
              <NavLink href="#contact">Contact Us</NavLink>
              <NavLink href="#contact">Payment</NavLink>
              <NavLink href="#contact">Shipping</NavLink>
              <NavLink href="#contact">Returns</NavLink>
              <NavLink href="#contact">Faqs</NavLink>
              <NavLink href="#contact">Live Chat</NavLink>
              <NavLink href="#contact">The Burberry App</NavLink>
              <NavLink href="#contact">Store Locator</NavLink>
            </nav>
          </div>
          <div className="col-md-3">
            <NavTitle>our company</NavTitle>
            <nav>
              <NavLink href="#contact">Our History</NavLink>
              <NavLink href="#contact">Burberry Group Pic</NavLink>
              <NavLink href="#contact">Careers</NavLink>
              <NavLink href="#contact">Corporate Responsibility</NavLink>
              <NavLink href="#contact">Site Map</NavLink>
            </nav>
          </div>
          <div className="col-md-4">
            <NavTitle>legal &amp; cookies</NavTitle>
            <nav>
              <NavLink href="#contact">Terms &amp; Conditions</NavLink>
              <NavLink href="#contact">Privacy Policy</NavLink>
              <NavLink href="#contact">Cookie Policy</NavLink>
              <NavLink href="#contact">Accessibility Statement</NavLink>
              <NavLink href="#contact">Japan Only - SCTL indications</NavLink>
            </nav>
          </div>
        </div>
      </FooterMenu>
      <FooterButtons>
        <FooterButton type="button">Shipping country: Russian Federation</FooterButton>
        <FooterButton type="button">Language: English</FooterButton>
      </FooterButtons>
      <FooterHelpers>
        <HelpersTitle>Need help?</HelpersTitle>
        <HelpersLink href="!#">Find out more and contact us</HelpersLink>
      </FooterHelpers>
    </div>
  </Footer>
);
