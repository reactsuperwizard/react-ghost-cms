import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import PostContent from 'lib/components/PostContent';

describe('PostContent', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<PostContent
      post={{
        title: 'sitename',
        html: '<div class="abc">hi</div>',
        excerpt: 'cool post',
        feature_image: 'https://example.com/feature',
        published_at: '2021-06-12T18:19:25.576Z',
        reading_time: 2,
      }}
    />);
  });

  it('should mount', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should mount Page with correct props', () => {
    const page = wrapper.find('Page');

    expect(page.exists()).toEqual(true);
    expect(page.prop('hasCover')).toEqual(true);
    expect(page.prop('title')).toEqual('sitename');
    expect(page.prop('excerpt')).toEqual('cool post');
    expect(page.prop('image')).toEqual('https://example.com/feature');
    expect(page.prop('html')).toEqual('<div class="abc">hi</div>');
    expect(page.prop('publishedAt')).toEqual('2021-06-12T18:19:25.576Z');
    expect(page.prop('readingTime')).toEqual(2);
  });

  it('should add empty excerpt if not present', () => {
    const page = shallow(<PostContent
      post={{
        title: 'sitename',
        html: '<div class="abc">hi</div>',
        reading_time: 2,
      }}
    />).find('Page');

    expect(page.exists()).toEqual(true);
    expect(page.prop('excerpt')).toEqual('');
  });
});
