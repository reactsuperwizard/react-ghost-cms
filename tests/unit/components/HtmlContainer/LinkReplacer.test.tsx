import { Element } from 'domhandler/lib/node';

import { shallow } from 'enzyme';
import LinkReplacer from 'lib/components/HtmlContainer/LinkReplacer';

describe('LinkReplacer', () => {
  describe('~canReplace', () => {
    it('should replace <a> tags with href attribute', () => {
      const element = new Element('a', { href: 'https://example.com' });

      expect(LinkReplacer.canReplace(element)).toEqual(true);
    });

    it('should not replace <a> tags without href attribute', () => {
      const element = new Element('a', { src: 'https://example.com' });

      expect(LinkReplacer.canReplace(element)).toEqual(false);
    });

    it('should not replace tags other than <a>', () => {
      const element = new Element('img', { href: 'https://example.com' });

      expect(LinkReplacer.canReplace(element)).toEqual(false);
    });
  });

  describe('~replace', () => {
    it('should return node wrapped with next/link', () => {
      const element = new Element('a', { href: 'https://example.com', class: 'my-link' });
      const replacedElement = LinkReplacer.replace(element);

      expect(replacedElement).not.toBeNull();

      // @ts-ignore
      const wrapper = shallow(replacedElement);

      expect(wrapper.exists()).toEqual(true);
      // expect(wrapper.name()).toEqual('Link');
      // expect(wrapper.prop('href')).toEqual('https://example.com');

      const a = wrapper.find('a');

      expect(a.exists()).toEqual(true);
      expect(a.prop('href')).toEqual('https://example.com');
      expect(a.prop('className')).toEqual('my-link');
    });

    it('should return null if href attribute not present', () => {
      const element = new Element('a', {});

      expect(LinkReplacer.replace(element)).toEqual(null);
    });
  });
});
