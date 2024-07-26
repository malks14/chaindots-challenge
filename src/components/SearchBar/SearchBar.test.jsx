import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  test('renders the search bar correctly', () => {
    render(<SearchBar setUserInput={() => {}} />);
    const inputElement = screen.getByLabelText(/City/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('updates input value on change', () => {
    render(<SearchBar setUserInput={() => {}} />);
    const inputElement = screen.getByLabelText(/City/i);

    fireEvent.change(inputElement, { target: { value: 'Buenos Aires' } });
    expect(inputElement.value).toBe('Buenos Aires');
  });

  test('calls setUserInput with the correct value on form submit', () => {
    const setUserInput = vi.fn(); 
    render(<SearchBar setUserInput={setUserInput} />);

    const inputElement = screen.getByLabelText(/City/i);
    fireEvent.change(inputElement, { target: { value: 'Olivos' } });

    const formElement = screen.getByTestId('search-form');
    fireEvent.submit(formElement);

    expect(setUserInput).toHaveBeenCalledWith('Olivos');
  });
});
