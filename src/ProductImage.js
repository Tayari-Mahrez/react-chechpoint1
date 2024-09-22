import React from 'react';
import product from './product';

const ProductImage = () => {
  return <img src={product.image} alt={product.name} style={{ width: '150px' }} />;
};

export default ProductImage;