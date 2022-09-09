import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import Page from 'lib/components/Page';

describe('Page', () => {
  let wrapper: ShallowWrapper;

  describe('with cover', () => {
    beforeAll(() => {
      wrapper = shallow(
        <Page
          title='my page'
          html='<div class="custom">abc</div>'
          excerpt='awesome page'
          hasCover
          image='https://example.com/image'
          publishedAt='2021-06-18T21:04:20.682Z'
          readingTime={2}
        />,
      );
    });

    it('should mount', () => {
      expect(wrapper.exists()).toEqual(true);
    });

    it('should contain the page cover', () => {
      expect(wrapper.find('PageCover').exists()).toEqual(true);
      expect(wrapper.find('PageTitle').exists()).toEqual(false);
    });

    it('should contain html', () => {
      const htmlContainer = wrapper.find('HtmlContainer');

      expect(htmlContainer.exists()).toEqual(true);
      expect(htmlContainer.prop('html')).toEqual('<div class="custom">abc</div>');
    });
  });

  describe('without cover', () => {
    beforeAll(() => {
      wrapper = shallow(
        <Page
          title='my page'
          html='<div class="custom">abc</div>'
          excerpt='awesome page'
        />,
      );
    });

    it('should mount', () => {
      expect(wrapper.exists()).toEqual(true);
    });

    it('should contain the page title', () => {
      expect(wrapper.find('PageCover').exists()).toEqual(false);
      expect(wrapper.find('PageTitle').exists()).toEqual(true);
    });

    it('should contain html', () => {
      const htmlContainer = wrapper.find('HtmlContainer');

      expect(htmlContainer.exists()).toEqual(true);
      expect(htmlContainer.prop('html')).toEqual('<div class="custom">abc</div>');
    });
  });
});
