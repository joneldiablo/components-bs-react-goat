jest.mock('../actions/action', () => 'Action');
jest.mock('../containers', () => ({ __esModule: true, default: { Box: 'Box' } }));
jest.mock('../fields', () => ({ __esModule: true, default: { FieldX: 'FieldX' } }));
jest.mock('../navigation/brand-navigation', () => 'BrandNavigation');
jest.mock('../navigation/card-list-navigation', () => 'CardListNavigation');
jest.mock('../navigation/cards-navigation', () => 'CardsNavigation');
jest.mock('../navigation/header-navigation', () => 'HeaderNavigation');
jest.mock('../navigation/navbar', () => 'Navbar');
jest.mock('../navigation/navigation', () => 'Navigation');
jest.mock('../navigation/side-navigation', () => 'SideNavigation');
jest.mock('../tables/table', () => 'Table');

import components from '../components';

describe('components aggregator', () => {
  test('merges all component groups', () => {
    expect(components).toMatchObject({
      Action: 'Action',
      Box: 'Box',
      FieldX: 'FieldX',
      BrandNavigation: 'BrandNavigation',
      Table: 'Table',
    });
  });
});
