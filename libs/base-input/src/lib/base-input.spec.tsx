import { render } from '@testing-library/react';

import BaseInput from './base-input';

describe('BaseInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseInput />);
    expect(baseElement).toBeTruthy();
  });
});
