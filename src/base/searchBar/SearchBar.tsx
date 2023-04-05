import React, { useEffect, useRef, useState } from 'react';
import './searchBar.css';

const SEARCH_STORAGE_KEY = 'searchValue';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>('');
  const searchValueRef = useRef<string>(localStorage.getItem(SEARCH_STORAGE_KEY) || '');

  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    searchValueRef.current = e.target.value;
  };

  useEffect(() => {
    setSearchValue(searchValueRef.current);
    return () => {
      localStorage.setItem(SEARCH_STORAGE_KEY, searchValueRef.current);
    };
  }, []);

  return (
    <div className="search-container">
      <input type="search" value={searchValue} onChange={setValue} />
    </div>
  );
}
