import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders the footer with correct text', () => {
    render(<Footer />);

    const footerText = screen.getByText(/Challenge Chaindots - Guido Greco/i);
    expect(footerText).toBeInTheDocument();
  });
});
