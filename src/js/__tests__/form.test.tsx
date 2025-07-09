import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../forms/form';

it('renders form fields', () => {
  const fields = [{ name: 'user', type: 'Field', label: 'User' }];
  render(<Form name="myform" fields={fields} />);
  expect(screen.getByLabelText('User')).toBeInTheDocument();
});
