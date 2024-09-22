import React from 'react';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';
import { Card } from 'react-bootstrap';
import product from './product';

const firstName = "User"; 

const App = () => {
  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: '20px' }}>
        <Card.Body>
          <ProductImage />
          <ProductName />
          <ProductPrice />
          <ProductDescription />
        </Card.Body>
      </Card>
      <div>
        {firstName ? (
          <div>
            <h5>Hello, {firstName}!</h5>
            <img src={product.image} alt={product.name} style={{ width: '100px' }} />
          </div>
        ) : (
          <h5>Hello, there!</h5>
        )}
      </div>
    </div>
  );
};

export default App;
