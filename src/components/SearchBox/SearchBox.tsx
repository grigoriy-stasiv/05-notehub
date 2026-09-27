import React from 'react';
import type { ChangeEvent } from 'react';
import css from './SearchBox.module.css';

interface SearchBoxProps { 
  onChange: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={handleInputChange}
    />
  );
};

export default SearchBox;
