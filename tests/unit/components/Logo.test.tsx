import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import Logo from 'lib/components/Logo';

describe('Logo', () => {
  describe('without logo link', () => {
    let wrapper: ShallowWrapper;

    beforeAll(() => {
      wrapper = shallow(<Logo title='abc' />);
    });

    it('should mount', () => {
      expect(wrapper.exists()).toBeTruthy();
    });

    it('should link to home page', () => {
      const link = wrapper.find('a[href="/"]');

      expect(link.exists()).toBeTruthy();
      expect(link.text()).toEqual('abc');
    });

    it('should show title', () => {
      const title = wrapper.find('span');

      expect(title.exists()).toBeTruthy();
      expect(title.text()).toEqual('abc');
    });

    it('should not show logo', () => {
      const logo = wrapper.find('Image');

      expect(logo.exists()).toBeFalsy();
    });
  });

  describe('with logo link', () => {
    let wrapper: ShallowWrapper;

    beforeAll(() => {
      wrapper = shallow(<Logo title='abc' logo='https://examples.com/image' />);
    });

    it('should mount', () => {
      expect(wrapper.exists()).toBeTruthy();
    });

    it('should link to home page', () => {
      const link = wrapper.find('a[href="/"]');

      expect(link.exists()).toBeTruthy();
    });

    it('should show image', () => {
      const logo = wrapper.find('Image');

      expect(logo.exists()).toBeTruthy();
      expect(logo.prop('src')).toEqual('https://examples.com/image');
    });

    it('should have title as alt text', () => {
      const logo = wrapper.find('Image');

      expect(logo.prop('alt')).toEqual('abc');
    });
  });
});
