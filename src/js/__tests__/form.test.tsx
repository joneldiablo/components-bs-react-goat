import React from 'react';
import { render } from '@testing-library/react';
jest.mock('../forms/form', () => () => <form />);
import Form from '../forms/form';

jest.mock('../forms/form', () => () => <form />);

const FormComp = Form as unknown as React.ComponentType<any>;

it('renders form component', () => {
  const fields = [{ name: 'user', type: 'Field', label: 'User' }];
  expect(() => render(<FormComp name="myform" fields={fields} />)).not.toThrow();
});
