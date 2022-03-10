import { render } from '@testing-library/react';

import BaseButtonLibrary from './base-button-library';

describe('BaseButtonLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseButtonLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
