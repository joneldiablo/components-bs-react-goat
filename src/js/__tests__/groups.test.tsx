import React from 'react';
import { render } from '@testing-library/react';
import groups from '../forms/groups';

describe('group components render', () => {
  for (const [name, Comp] of Object.entries(groups as Record<string, React.ComponentType<any>>)) {
    test(`renders ${name}`, () => {
      expect(() => render(<Comp name="grp" fields={[]} />)).not.toThrow();
    });
  }
});
