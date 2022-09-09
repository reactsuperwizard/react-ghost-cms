import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import Description from 'lib/components/Footer/Description';

describe('Footer/Description', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<Description description='abc' />);
  });

  it('should mount', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have the description', () => {
    expect(wrapper.text()).toEqual('abc');
  });
});
