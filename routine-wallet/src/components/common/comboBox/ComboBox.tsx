// src/components/ComboBox.tsx
import React, { useState, useEffect } from 'react';

interface ComboBoxProps {
  fetchData: () => Promise<{ value: number; label: string }[]>;
  placeholder?: string;
  value: number;
  onChange: (value: number) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({ fetchData, placeholder, value, onChange}) => {
  const [items, setItems] = useState<{ value: number; label: string }[]>([]);

  useEffect(() => {
    fetchData().then(data => {
      setItems(data);
    });
  }, [fetchData]);

  return (
    <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
      <option value="">{placeholder}</option>
      {items.map((item, index) => (
        <option key={index} value={item.value}>{item.label}</option>
      ))}
    </select>
  );
};

export default ComboBox;
