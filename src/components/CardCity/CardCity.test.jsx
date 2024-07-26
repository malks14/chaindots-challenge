import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import CardCity from './CardCity';
import CityContext from '../../store/city-context';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  useNavigate: () => mockNavigate, 
}));

const mockCityContext = {
  isCityAdded: vi.fn(() => false),
  addCity: vi.fn(),
  removeCity: vi.fn(),
};

const cityMock = {
  location: { name: "Test City" },
  city_name: "Test City",
  current: {
    temp_c: 25,
    condition: {
      text: "Sunny",
      icon: "sunny.png",
    },
    humidity: 60,
    gust_kph: 15,
  },
  city_temp: 25,
  city_condition: "Sunny",
  city_condition_icon: "sunny.png",
  city_humidity: 60,
  city_wind_speed: 15,
};

describe('CardCity Component', () => {
  test('navigates to the correct city forecast page when the Forecast button is clicked', () => {
    render(
      <Router>
        <CityContext.Provider value={mockCityContext}>
          <CardCity city={cityMock} />
        </CityContext.Provider>
      </Router>
    );

    const forecastButton = screen.getByRole('button', { name: /Forecast/i });
    expect(forecastButton).toBeInTheDocument();

    fireEvent.click(forecastButton);

    expect(mockNavigate).toHaveBeenCalledWith('/city/test city');
  });
});
