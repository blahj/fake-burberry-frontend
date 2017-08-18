import React from 'react';
import styled from 'styled-components';


import Header from './Header';
import Card from './Card';
import LoadMore from './LoadMore';

const Heading = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  display: block;
  font-weight: 500;
  font-family: "Lora", serif;
  font-size: 1rem;
  line-height: 1rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const Cards = styled.section`
  margin-top: 2rem;
  @media screen and (min-width: 48rem) {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
`;

const Separator = styled.hr`
  margin-top: 1rem;
  margin-bottom: 3rem;
  background: 0;
  border: 0;
  border-bottom: solid 1px #c6c6c6;

  @media screen and (min-width: 48rem) {
    margin-top: 2rem;
  }
`;

const products = [
  {
    id: 1,
    label: 'Relaxed fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    colors: 3,
    price: 120000,
    photo: 'https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
  },
  {
    id: 2,
    label: 'Classic fit',
    name: 'The Kensington – Mid-Length Heritage Trench Coat',
    colors: 3,
    price: 110000,
    photo: 'https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
  },
  {
    id: 3,
    label: 'Toilered fit',
    name: 'The Sandringham – Mid-length Heritage Trench Coat',
    colors: 1,
    price: 110000,
    photo: 'https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
  },
  {
    id: 4,
    label: 'Slim fit',
    name: 'The Chelsea – Short Heritage Trench Coat',
    colors: 4,
    price: 100000,
    photo: 'https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
  },
  {
    id: 5,
    label: 'Relaxed fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    colors: 3,
    price: 120000,
    photo: 'https://assets.burberry.com/is/image/Burberryltd/f1cdf8b71c19df8d42ed3ea90712c391e6823635.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
  },
  {
    id: 6,
    label: 'Classic fit',
    name: 'The Kensington – Long Heritage Trench Coat',
    colors: 4,
    price: 120000,
    photo: 'https://assets.burberry.com/is/image/Burberryltd/23b186def7725e3d4ce4745374ebf11267ed68ed.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
  },
  {
    id: 7,
    label: 'Toilored fit',
    name: 'The Sandringham Short Heritage Trench Coat',
    colors: 3,
    price: 100000,
    photo: 'https://assets.burberry.com/is/image/Burberryltd/c89a32c4e94178be2d833b9a3d434fa6087d1f25.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
  },
  {
    id: 8,
    label: 'Slim fit',
    name: 'The Chelsea – Long Heritage Trench Coat',
    colors: 3,
    price: 120000,
    photo: 'https://assets.burberry.com/is/image/Burberryltd/f3e96bbcf8fa0aca509c9f5933110b8596d4f06e.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
  },
];

export default () => (
  <div>
    <Header />
    <div className="container">
      <Cards>
        <Heading>Heritage Trench Coats</Heading>
        <div className="row">
          {products.map(item => (
            <div className="col-xs-6 col-md-3" key={item.id}>
              <Card
                id={item.id}
                label={item.label}
                name={item.name}
                colors={item.colors}
                price={item.price}
                photo={item.photo}
              />
            </div>
          ))}
        </div>
        <Separator />
        <Heading>Single Breasted Trench Coats</Heading>
        <div className="row">
          {products.map(item => (
            <div className="col-xs-6 col-md-3" key={item.id}>
              <Card
                id={item.id}
                label={item.label}
                name={item.name}
                colors={item.colors}
                price={item.price}
                photo={item.photo}
              />
            </div>
          ))}
        </div>
      </Cards>
      <LoadMore />
    </div>
  </div>
);
