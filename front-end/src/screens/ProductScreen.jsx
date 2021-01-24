import React from 'react';
import products from '../products';
import { Link } from 'react-router-dom';

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
    </>
  );
};

export default ProductScreen;
