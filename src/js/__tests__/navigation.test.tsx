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

test('shows floating caret when navigation is collapsed', () => {
  const menu: NavigationItem[] = [
    { name: 'parent', label: 'Parent', icon: 'folder', iconClasses: '', title: 'Parent', menu: [
      { name: 'child', label: 'Child', path: '/child', iconClasses: '', title: 'Child' }
    ] }
  ];
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Navigation name="nav" menu={menu} location={{ pathname: '/' }} open={false} />
    </MemoryRouter>
  );
  expect(container.querySelectorAll('.caret-icon').length).toBeGreaterThan(0);
});
