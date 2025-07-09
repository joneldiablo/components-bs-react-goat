import React from 'react';
import { render, screen } from '@testing-library/react';
import Field from '../forms/fields/field';

const FieldComp = Field as unknown as React.ComponentType<any>;

test('renders label and input', () => {
  render(<FieldComp name="email" label="Email" />);
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
});
