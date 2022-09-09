import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import Footer from 'lib/components/Footer';

describe('Footer', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<Footer
      title='abc'
      description='some description'
      secondaryNavigation={[
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
