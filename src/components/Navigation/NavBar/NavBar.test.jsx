import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import AuthContext from '../../../store/auth-context';

// Mock the AuthContext provider
const mockAuthContext = {
  isLoggedIn: true,
  userName: 'John Doe',
  logout: vi.fn(), // Use `vi.fn()` for mock functions
};

describe('NavBar Component', () => {
  test('renders the NavBar with correct elements', () => {
    render(
      <Router>
        <AuthContext.Provider value={mockAuthContext}>
          <NavBar />
        </AuthContext.Provider>
      </Router>
    );

    const appBar = screen.getByRole('banner');
    expect(appBar).toBeInTheDocument();

    const logo = screen.getByText(/Chaindots/i);
    expect(logo).toBeInTheDocument();


    const greeting = screen.getByText(/Hello,*/i);
    expect(greeting).toBeInTheDocument();

    // Check if the logout button is present
    const logoutButton = screen.getByRole('button', { name: /Logout/i });
    expect(logoutButton).toBeInTheDocument();
  });

  test('calls logoutHandler on logout button click', () => {
    render(
      <Router>
        <AuthContext.Provider value={mockAuthContext}>
          <NavBar />
        </AuthContext.Provider>
      </Router>
    );

    const logoutButton = screen.getByRole('button', { name: /Logout/i });
    fireEvent.click(logoutButton);

    // Check if the logout function is called
    expect(mockAuthContext.logout).toHaveBeenCalled();
  });
});
