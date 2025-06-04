import { useState } from 'react'
import '../App.css'
import AddButton, { SubButton } from './PlusMinus.tsx'

type ProductCardProps = {
  title: string;
  image?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, image='no-image-found.jpg' }) => {
  const [count,setCount] = useState<number>(0);

  const handleAdd = () => {
    setCount(prev => prev + 1);
  };

  const handleSub = () => {
    setCount(prev => prev > 0 ? prev - 1: 0);
  };

  return (
    <div className="ProductCard">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      
      <div className="bottom">
        <AddButton onAdd={handleAdd} />
        <span>Count: {count}</span>
        <SubButton onSub={handleSub} />
      </div>
    </div>
  )
}

export default ProductCard;