import React from 'react';
import css from './SearchBox.module.css';

interface ISearchBoxProps {
  onChange: (value: string) => void;
}

const SearchBox: React.FC<ISearchBoxProps> = ({ onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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