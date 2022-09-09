import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import ContentRight from 'lib/components/Footer/ContentRight';

describe('Footer/ContentRight', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<ContentRight />);
  });

  it('should mount', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should have subscription', () => {
    expect(wrapper.find('Subscription').exists()).toEqual(true);
  });
});
