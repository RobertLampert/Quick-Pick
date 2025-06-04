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
    <div className="card">
      <h2>{title}</h2>
      <img src={image} alt={title} style={{ width: '200px' }} />
      <p>
        <AddButton onAdd={handleAdd} />
        Count: {count}
        <SubButton onSub={handleSub} />
      </p>
    </div>
  )
}

export default ProductCard;