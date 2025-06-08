import React from 'react';

type ProductCounterProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  style?: React.CSSProperties;
};

const ProductCounter: React.FC<ProductCounterProps> = ({
  value,
  onChange,
  min = 0,
  style = {},
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseInt(e.target.value);
    onChange(isNaN(parsed) ? 0 : Math.max(min, parsed));
  };

  return (
    <input
      type="number"
      value={value}
      onChange={handleChange}
      min={min}
      style={{
        width: '50px',
        textAlign: 'center',
        fontSize: '1rem',
        borderRadius: '5px',
        padding: '2px',
        margin: '0 -4px',
        ...style,
      }}
    />
  );
};

export default ProductCounter;