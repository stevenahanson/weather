import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 

import WeatherWidget from '../Components/WeatherWidget';

describe('WeatherWidget', () => {
  test('renders weather data', () => {
    const weatherData = {
      city: 'foo-city',
      country: 'foo-country',
      description: 'foo-description',
      temperature: 23
    };

    render(<WeatherWidget weather={weatherData} />);

    expect(screen.getByText('foo-city,foo-country')).toBeInTheDocument();
    expect(screen.getByText('foo-description')).toBeInTheDocument();
    expect(screen.getByText('23°C')).toBeInTheDocument();
  });
});
