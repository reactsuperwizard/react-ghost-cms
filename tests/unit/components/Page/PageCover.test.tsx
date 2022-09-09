import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import PageCover from 'lib/components/Page/PageCover';

describe('Page/PageCover', () => {
  let wrapper: ShallowWrapper;

  describe('without image', () => {
    beforeAll(() => {
      wrapper = shallow(
        <PageCover
          title='my page'
          excerpt='this is an awesome page'
        />,
      );
    });

    it('should mount', () => {
      expect(wrapper.exists()).toEqual(true);
    });

    it('should show name and excerpt', () => {
      expect(wrapper.text()).toContain('my page');
      expect(wrapper.text()).toContain('this is an awesome page');
    });
  });

  describe('with image', () => {
    beforeAll(() => {
      wrapper = shallow(
        <PageCover
          title='my page'
          excerpt='this is an awesome page'
          image='https://examples.com/image'
        />,
      );
    });

    it('should mount', () => {
      expect(wrapper.exists()).toEqual(true);
    });

    it('should show name and excerpt', () => {
      expect(wrapper.text()).toContain('my page');
      expect(wrapper.text()).toContain('this is an awesome page');
    });
  });

  describe('with publishedAt and readingTime', () => {
    beforeAll(() => {
      wrapper = shallow(
        <PageCover
          title='my page'
          excerpt='this is an awesome page'
          publishedAt='2021-06-18T21:04:20.682Z'
          readingTime={2}
        />,
      );
    });

    it('should mount', () => {
      expect(wrapper.exists()).toEqual(true);
    });

    it('should show name and excerpt', () => {
      expect(wrapper.text()).toContain('my page');
      expect(wrapper.text()).toContain('this is an awesome page');
    });

    it('should show date and time', () => {
      expect(wrapper.text()).toContain('<DateAndTime />');
    });
  });
});
