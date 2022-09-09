import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import Button from 'lib/components/form/Button';

describe('Button', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<Button inputType='submit' value='subscribe' />);
  });

  it('should mount', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have type attributes', () => {
    const input = wrapper.find('button');

    expect(input.exists()).toBeTruthy();
    expect(input.is('button[type="submit"]')).toBeTruthy();
  });

  it('should have the value as text', () => {
    const input = wrapper.find('button');

    expect(input.exists()).toBeTruthy();
    expect(input.text()).toEqual('subscribe');
  });
});
