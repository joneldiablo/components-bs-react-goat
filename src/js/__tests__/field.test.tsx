import React from 'react';
import { render, screen } from '@testing-library/react';
import Field from '../forms/fields/field';

test('renders label and input', () => {
  render(<Field name="email" label="Email" />);
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
});
