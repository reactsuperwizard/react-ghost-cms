import { Element } from 'domhandler/lib/node';

import { shallow } from 'enzyme';
import ImageReplacer from 'lib/components/HtmlContainer/ImageReplacer';

jest.mock('next/image');

// mocked
import Image from 'next/image';

describe('ImageReplacer', () => {
  describe('~canReplace', () => {
    it('should replace <img> tags with src, height and width attribute', () => {
      const element = new Element('img', {
        src: 'https://example.com/image',
        height: '10',
        width: '10',
      });

      expect(ImageReplacer.canReplace(element)).toEqual(true);
    });

    it('should not replace <img> tags without src attribute', () => {
      const element = new Element('img', {
        height: '10',
        width: '10',
      });

      expect(ImageReplacer.canReplace(element)).toEqual(false);
    });

    it('should not replace <img> tags without height or width attribute', () => {
      const elementWithoutWidth = new Element('img', {
        src: 'https://example.com/image',
        height: '10',
      });

      expect(ImageReplacer.canReplace(elementWithoutWidth)).toEqual(false);

      const elementWithoutHeight = new Element('img', {
        src: 'https://example.com/image',
        width: '10',
      });

      expect(ImageReplacer.canReplace(elementWithoutHeight)).toEqual(false);
    });

    it('should not replace tags other than <img>', () => {
      const element = new Element('a', {
        src: 'https://example.com/image',
        height: '10',
        width: '10',
      });

      expect(ImageReplacer.canReplace(element)).toEqual(false);
    });
  });

  describe('~replace', () => {
    it('should return node wrapped with next/image', () => {
      const element = new Element('a', {
        src: 'https://example.com/image',
        height: '10',
        width: '10',
      });
      const replacedElement = ImageReplacer.replace(element);

      expect(replacedElement).not.toBeNull();

      // @ts-ignore
      const wrapper = shallow(replacedElement);

      expect(wrapper.exists()).toEqual(true);
      expect(Image).toHaveBeenCalledTimes(1);
      expect(Image).toHaveBeenCalledWith({
        src: 'https://example.com/image',
        height: '10',
        width: '10',
      }, {});
    });

    it('should return null if src attribute not present', () => {
      const element = new Element('img', {});

      expect(ImageReplacer.replace(element)).toEqual(null);
    });
  });
});
