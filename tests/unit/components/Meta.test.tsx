import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import Meta from 'lib/components/Meta';

describe('Meta', () => {
  let wrapper: ShallowWrapper;
  let head: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<Meta
      url='https://example.com'
      title='sitename'
      icon='https://example.com/icon'
      charset='utf-8'
      description='my awesome site'
    />);

    head = wrapper.find('Head');
  });

  it('should mount', () => {
    expect(wrapper.exists()).toEqual(true);
    expect(head.exists()).toEqual(true);
  });

  it('should add title', () => {
    const title = head.find('title');

    expect(title.exists()).toEqual(true);
    expect(title.text()).toEqual('sitename');
  });

  it('should add description meta', () => {
    const description = head.find('meta[name="description"]');

    expect(description.exists()).toEqual(true);
    expect(description.prop('content')).toEqual('my awesome site');
  });

  it('should add charset meta', () => {
    const description = head.find('meta[charSet="utf-8"]');

    expect(description.exists()).toEqual(true);
  });

  it('should add shortcut icon link', () => {
    const description = head.find('link[rel="shortcut icon"]');

    expect(description.exists()).toEqual(true);
    expect(description.prop('href')).toEqual('https://example.com/icon');
  });

  it('should add title from meta if present', () => {
    wrapper = shallow(<Meta
      url='https://example.com'
      title='sitename'
      metaTitle='custom name'
    />);
    head = wrapper.find('Head');

    const description = head.find('title');

    expect(description.exists()).toEqual(true);
    expect(description.text()).toEqual('custom name');
  });

  it('should add description from meta if present', () => {
    wrapper = shallow(<Meta
      url='https://example.com'
      title='sitename'
      description='my awesome site'
      metaDescription='custom description'
    />);
    head = wrapper.find('Head');

    const description = head.find('meta[name="description"]');

    expect(description.exists()).toEqual(true);
    expect(description.prop('content')).toEqual('custom description');
  });

  describe('for Open Graph', () => {
    it.todo('should add site_name');
    it.todo('should add type');
    it.todo('should add title');
    it.todo('should add description');
    it.todo('should add url');
    it.todo('should add image');
  });

  describe('for Twitter', () => {
    it.todo('should add card');
    it.todo('should add title');
    it.todo('should add description');
    it.todo('should add url');
    it.todo('should add image');
  });
});
