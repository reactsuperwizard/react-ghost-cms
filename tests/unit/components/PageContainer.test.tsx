import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import PageContainer from 'lib/components/PageContainer';

describe('PageContainer', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(
      <PageContainer
        title='sitename'
        description='awesome site'
        logo='https://example.com/logo'
        navigation={[{
          label: 'abc',
          url: 'https://example.com/abc',
        }]}
        secondaryNavigation={[{
          label: 'efg',
          url: 'https://example.com/efg',
        }]}
      >
        <div className='abc' />
      </PageContainer>,
    );
  });

  it('should mount', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should mount the header', () => {
    const header = wrapper.find('Header');

    expect(header.exists()).toEqual(true);
    expect(header.prop('title')).toEqual('sitename');
    expect(header.prop('navigation')).toEqual([{
      label: 'abc',
      url: 'https://example.com/abc',
    }]);
    expect(header.prop('logo')).toEqual('https://example.com/logo');
  });

  it('should mount the footer', () => {
    const footer = wrapper.find('Footer');

    expect(footer.exists()).toEqual(true);
    expect(footer.prop('title')).toEqual('sitename');
    expect(footer.prop('description')).toEqual('awesome site');
    expect(footer.prop('secondaryNavigation')).toEqual([{
      label: 'efg',
      url: 'https://example.com/efg',
    }]);
    expect(footer.prop('logo')).toEqual('https://example.com/logo');
  });

  it('should add the content', () => {
    const content = wrapper.find('.abc');

    expect(content.exists()).toEqual(true);
  });
});
