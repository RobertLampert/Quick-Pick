import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface AddButtonProps {
  onAdd: () => void;
}

interface MinusButtonProps {
  onSub: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onAdd }) => (
  <IconButton color="primary" aria-label="add" onClick={onAdd}>
    <AddIcon />
  </IconButton>
);

export const SubButton: React.FC<MinusButtonProps> = ({ onSub }) => (
  <IconButton color="primary" aria-label="subtract" onClick={onSub}>
    <RemoveIcon />
  </IconButton>
);

export default AddButton;