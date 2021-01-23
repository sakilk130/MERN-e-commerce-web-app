import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../products';
import Products from '../components/Products';

const HomeScreen = () => {
  return (
    <>
      <h1>Leatest Products</h1>
      <Row>
        {products.map((product, i) => (
          <Col key={i} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
