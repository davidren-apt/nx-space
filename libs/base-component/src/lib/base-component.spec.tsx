import { getBaseComponentString } from './base-component';

describe('baseComponent', () => {
  it('should work', () => {
    expect(getBaseComponentString()).toEqual('This is base component');
  });
});
