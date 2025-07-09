import React from 'react';
import { render } from '@testing-library/react';
import {
  AlertContainer,
  CardContainer,
  ModalContainer,
  OffcanvasContainer,
  PanelContainer,
} from '../containers';

jest.mock('bootstrap/js/dist/modal', () => {
  return jest.fn().mockImplementation(() => ({ show: jest.fn(), hide: jest.fn(), dispose: jest.fn() }));
});

jest.mock('bootstrap/js/dist/offcanvas', () => {
  return jest.fn().mockImplementation(() => ({ show: jest.fn(), hide: jest.fn(), dispose: jest.fn() }));
});

describe('container components render', () => {
  const cases: Array<[string, React.ComponentType<any>, any]> = [
    ['AlertContainer', AlertContainer as any, { name: 'alert', label: 'Info' }],
    ['CardContainer', CardContainer as any, { name: 'card' }],
    ['ModalContainer', ModalContainer as any, { name: 'modal' }],
    ['OffcanvasContainer', OffcanvasContainer as any, { name: 'offcanvas' }],
    ['PanelContainer', PanelContainer as any, { name: 'panel' }],
  ];

  test.each(cases)('renders %s', (_label, Comp, props) => {
    expect(() => render(<Comp {...props} />)).not.toThrow();
  });
});
