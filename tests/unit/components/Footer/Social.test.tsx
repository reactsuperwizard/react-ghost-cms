import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import Social from 'lib/components/Footer/Social';

describe('Footer/Social', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<Social />);
  });

  it('should mount', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
