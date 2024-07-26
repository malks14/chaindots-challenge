import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, test, expect, vi } from 'vitest';
import CityForecastPage from './CityForecastPage';

const mockForecastData = {
  location: { name: "Test City" },
  current: {
    temp_c: 25,
    condition: { text: "Sunny", icon: "sunny.png" },
    humidity: 60,
    wind_kph: 15,
  },
  forecast: {
    forecastday: [
      {
        date: '2024-07-27',
        day: {
          avgtemp_c: 25,
          condition: { text: "Sunny", icon: "sunny-icon.png" },
          avghumidity: 50,
          maxwind_kph: 15,
        },
      },
      {
        date: '2024-07-28',
        day: {
          avgtemp_c: 20,
          condition: { text: "Partly Cloudy", icon: "cloudy-icon.png" },
          avghumidity: 60,
          maxwind_kph: 12,
        },
      },
    ],
  },
};

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockForecastData),
  })
);

describe('CityForecastPage', () => {
  test('fetches and displays forecast data', async () => {
    render(
      <MemoryRouter initialEntries={['/city/TestCity']}>
        <Routes>
          <Route path="/city/:city" element={<CityForecastPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /forecast - testcity/i })).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      expect(screen.getByText(/Now/i)).toBeInTheDocument();
    });
  });

  test('displays error message on fetch failure', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Failed to fetch')));

    render(
      <MemoryRouter initialEntries={['/city/TestCity']}>
        <Routes>
          <Route path="/city/:city" element={<CityForecastPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /forecast - testcity/i })).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      expect(screen.getByText(/something went wrong. try again/i)).toBeInTheDocument();
    });
  });
});
