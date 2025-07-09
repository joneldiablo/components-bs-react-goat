import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BrandNavigation from '../navigation/brand-navigation';

test('renders brand elements', () => {
  render(
    <MemoryRouter>
      <BrandNavigation name="nav" brandName="MyBrand" logoSrc="logo.png" path="/home" slogan="My slogan" />
    </MemoryRouter>
  );

  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', '/home');
  expect(screen.getByText('MyBrand')).toBeInTheDocument();
  expect(screen.getByText('My slogan')).toBeInTheDocument();
  const img = link.querySelector('img');
  expect(img).toHaveAttribute('src', 'logo.png');
});
