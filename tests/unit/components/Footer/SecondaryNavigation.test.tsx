import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import SecondaryNavigation from 'lib/components/Footer/SecondaryNavigation';

describe('Footer/SecondaryNavigation', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    const items = [{
      label: 'abc',
      url: 'https://abc',
    }, {
      label: 'efg',
      url: 'https://efg',
    }];

    wrapper = shallow(<SecondaryNavigation items={items} />);
  });

  it('should mount', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have links for all items', () => {
    const links = wrapper.find('a');

    expect(links.length).toEqual(2);

    expect(links.at(0).text()).toEqual('abc');
    expect(links.at(0).is('a[href="https://abc"]')).toBeTruthy();

    expect(links.at(1).text()).toEqual('efg');
    expect(links.at(1).is('a[href="https://efg"]')).toBeTruthy();
  });
});
