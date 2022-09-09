import { Element } from 'domhandler/lib/node';

jest.mock('lib/components/HtmlContainer/LinkReplacer', () => ({
  canReplace: jest.fn().mockReturnValueOnce(true),
  replace: jest.fn().mockReturnValue('replaced'),
}));

import Replacers from 'lib/components/HtmlContainer/Replacers';
import LinkReplacer from 'lib/components/HtmlContainer/LinkReplacer';

describe('Replacers', () => {
  describe('~replace', () => {
    it('should call the replacer for elements that can be replaced', () => {
      const node = new Element('abc', {});

      expect(Replacers.replace(node)).toEqual('replaced');
      expect(LinkReplacer.canReplace).toBeCalledTimes(1);
      expect(LinkReplacer.replace).toBeCalledTimes(1);
    });

    it('should return null if no replacers found', () => {
      const node = new Element('abc', {});

      expect(Replacers.replace(node)).toBeNull();
      expect(LinkReplacer.canReplace).toBeCalledTimes(2);
      expect(LinkReplacer.replace).toBeCalledTimes(1);
    });

    it('should return null if element is not a tag', () => {
      // @ts-ignore
      expect(Replacers.replace('abc')).toBeNull();
      expect(LinkReplacer.canReplace).toBeCalledTimes(2);
      expect(LinkReplacer.replace).toBeCalledTimes(1);
    });
  });
});
