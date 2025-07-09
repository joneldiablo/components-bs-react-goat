import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../forms/form';

const FormComp = Form as unknown as React.ComponentType<any>;

it('renders form fields', () => {
  const fields = [{ name: 'user', type: 'Field', label: 'User' }];
  render(<FormComp name="myform" fields={fields} />);
  expect(screen.getByLabelText('User')).toBeInTheDocument();
});
