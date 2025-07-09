import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation, { NavigationItem } from '../navigation/navigation';

test('renders navigation items', () => {
  const menu: NavigationItem[] = [
    { name: 'home', label: 'Home', path: '/', iconClasses: '', title: 'Home' }
  ];
  render(
    <MemoryRouter initialEntries={['/']}> 
      <Navigation name="nav" menu={menu} location={{ pathname: '/' }} />
    </MemoryRouter>
  );
  expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
});
