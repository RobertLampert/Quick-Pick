import React from 'react';
import ProductCard from './ProductCard';
import './ProductCardGrid.css';

type Product = {
  title: string;
  image?: string;
};

const products: Product[] = [
  { title: 'Pepsi 12 Pack', image: './Pepsi12.jpg' },
  { title: 'Pepsi Zero Sugar 12 Pack', image: './ZeroPepsi12.webp'},
  { title: 'Pepsi Diet 12 Pack', image: './DietPepsi12.webp'},
];

const ProductCardGrid: React.FC = () => {
  return (
    <div className="grid-container">
      {products.map((product, index) => (
        <ProductCard key={index} title={product.title} image={product.image} />
      ))}
    </div>
  );
};

export default ProductCardGrid;