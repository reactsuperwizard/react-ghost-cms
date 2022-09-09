import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import Header from 'lib/components/Header';

describe('Header', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<Header
      title='abc'
      navigation={[
        {
          label: 'abc',
          url: 'https://abc.com',
        },
      ]}
    />);
  });

  it('should mount', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
