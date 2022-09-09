import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import PageContent from 'lib/components/PageContent';

describe('PageContent', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<PageContent
      page={{
        title: 'sitename',
        html: '<div class="abc">hi</div>',
        feature_image: 'https://example.com/feature',
      }}
    />);
  });

  it('should mount', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should mount Page with correct props', () => {
    const page = wrapper.find('Page');

    expect(page.exists()).toEqual(true);
    expect(page.prop('title')).toEqual('sitename');
    expect(page.prop('image')).toEqual('https://example.com/feature');
    expect(page.prop('html')).toEqual('<div class="abc">hi</div>');
    expect(page.prop('hasCover')).toEqual(false);
  });
});
