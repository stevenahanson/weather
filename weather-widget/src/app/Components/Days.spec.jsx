import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Days from '../Components/Days';

describe('Days', () => {
  test('displays the current day correctly', () => {
    const mockDate = new Date('2024-03-08'); 
    const spy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    render(<Days />);

    expect(screen.getByText('Friday')).toBeInTheDocument();

    spy.mockRestore();
  });
});
