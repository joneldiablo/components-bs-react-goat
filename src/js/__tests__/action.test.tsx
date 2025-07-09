import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Action from '../actions/action';

function setup(props: any) {
  const navigate = jest.fn();
  const utils = render(<Action {...props} navigate={navigate} />);
  return { ...utils, navigate };
}

test('navigate is called with object when link action uses search and hash', () => {
  const { getByRole, navigate } = setup({
    type: 'link',
    to: '/foo',
    search: '?q=1',
    hash: '#bar',
    navOptions: { replace: true },
    name: 'go',
    id: '1',
    value: 'v'
  });
  fireEvent.click(getByRole('button'));
  expect(navigate).toHaveBeenCalledWith(
    { pathname: '/foo', search: '?q=1', hash: '#bar' },
    { replace: true, state: { name: 'go', id: '1', value: 'v' } }
  );
});

test('navigate is called with number when to is numeric', () => {
  const { getByRole, navigate } = setup({ type: 'link', to: -1 });
  fireEvent.click(getByRole('button'));
  expect(navigate).toHaveBeenCalledWith(-1);
});
