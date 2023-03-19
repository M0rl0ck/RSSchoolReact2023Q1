import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

const SEARCH_STORAGE_KEY = 'searchValue';
const str = 'test string in search';
describe('Search element', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it('search shoud be save value', async () => {
    const { unmount } = render(<SearchBar />);
    const input = screen.getByRole('searchbox');
    expect(input).toBeEmptyDOMElement();
    await userEvent.type(input, str);
    expect(input).toHaveValue(str);
    unmount();
    const inputSave = localStorage.getItem(SEARCH_STORAGE_KEY);
    expect(inputSave).toBe(str);
  });
  it('search shoud be get value from localstorage', () => {
    localStorage.setItem(SEARCH_STORAGE_KEY, str);
    render(<SearchBar />);
    expect(screen.getByRole('searchbox')).toHaveValue(str);
  });
});
