import { useState } from 'react'
import '../App.css'
import AddButton, { SubButton } from './PlusMinus.tsx'
import ProductCounter from './ProductCounter.tsx'

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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ marginBottom: '0px', color: '#f3f3f3' }}>Count</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
            <AddButton onAdd={handleAdd} />
            <ProductCounter value={count} onChange={setCount} />
            <SubButton onSub={handleSub} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;