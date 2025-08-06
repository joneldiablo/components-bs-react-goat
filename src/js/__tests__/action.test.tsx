import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Action from '../actions/action';

jest.mock('dbl-utils/resolve-refs', () => jest.fn((schema) => schema), { virtual: true });
const dispatchMock = jest.fn();
jest.mock(
  'dbl-utils/event-handler',
  () => ({ dispatch: (...args: any[]) => dispatchMock(...args) }),
  { virtual: true }
);
jest.mock('@farm-js/react-goat/component');
jest.mock('@farm-js/react-goat/goat', () => {
  return jest.fn().mockImplementation(() => ({
    buildContent: jest.fn().mockReturnValue(null),
  }));
});

describe('Action component', () => {
  test('dispatches event on click', () => {
    const navigate = jest.fn();
    const { getByRole } = render(<Action name="submit" navigate={navigate} />);
    fireEvent.click(getByRole('button'));
    expect(dispatchMock).toHaveBeenCalledWith('submit', 'submit');
  });

  test('navigates when type is link', () => {
    const navigate = jest.fn();
    const { getByRole } = render(
      <Action name="nav" type="link" to="/path" navigate={navigate} />
    );
    fireEvent.click(getByRole('button'));
    expect(navigate).toHaveBeenCalled();
  });
});
