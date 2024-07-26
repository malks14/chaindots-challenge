import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import AlertComponent from './AlertComponent';
import '@testing-library/jest-dom';

describe('AlertComponent', () => {

  test('closes the Snackbar when the handleClose function is triggered', () => {
    const setIsOpen = vi.fn();

    render(
      <AlertComponent 
        isOpen={true} 
        setIsOpen={setIsOpen} 
        alertText="This is an alert message" 
        alertType="success" 
      />
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(setIsOpen).toHaveBeenCalledWith(false);
  });
});
