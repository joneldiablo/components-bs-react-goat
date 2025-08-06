import AlertContainer from '../containers/alert-container/alert-container';

jest.mock('@farm-js/react-goat/component');
jest.mock('@farm-js/react-goat/complex-component');

describe('AlertContainer', () => {
  test('buildClasses computes color and close classes', () => {
    const instance: any = Object.create(AlertContainer.prototype);
    instance.props = { color: 'primary', showClose: true };
    instance.setOfClasses = new Set<string>();
    const classes = instance.buildClasses({ color: 'secondary', showClose: false } as any);
    expect(classes).toContain('alert-primary');
    expect(classes).toContain('alert-dismissible');
  });
});
