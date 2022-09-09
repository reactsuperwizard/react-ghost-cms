import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import ContentLeft from 'lib/components/Footer/ContentLeft';

describe('Footer/ContentLeft', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<ContentLeft
      title='abc'
      description='some description'
    />);
  });

  it('should mount', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should have logo', () => {
    const logo = wrapper.find('Logo');

    expect(logo.exists()).toEqual(true);
  });

  it('should have description', () => {
    const description = wrapper.find('Description');

    expect(description.exists()).toEqual(true);
  });
});
