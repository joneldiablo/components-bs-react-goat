import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../tables/table';

const TableComp = Table as unknown as React.ComponentType<any>;

test('renders table data', () => {
  const columns = { name: { label: 'Name' } };
  const data = [{ id: 1, name: 'Alice' }];
  render(<TableComp name="tbl" columns={columns} data={data} />);
  expect(screen.getByText('Alice')).toBeInTheDocument();
});
