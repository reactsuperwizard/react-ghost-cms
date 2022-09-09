import type { ShallowWrapper } from 'enzyme';

jest.mock('lib/components/HtmlContainer/Replacers', () => ({
  replace: jest.fn(),
}));

import { shallow } from 'enzyme';
import HtmlContainer from 'lib/components/HtmlContainer';
import Replacers from 'lib/components/HtmlContainer/Replacers'; // mocked

describe('HtmlContainer', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<HtmlContainer html='<div class="abc">testing</div>' />);
  });

  it('should mount', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should have classname as html-container', () => {
    const container = wrapper.find('.html-container');

    expect(container.exists()).toEqual(true);
  });

  it('should mount the given Html', () => {
    const div = wrapper.html();

    expect(div).toEqual('<div class="html-container"><div class="abc">testing</div></div>');
  });

  it('should call the replacer for each element', () => {
    expect(Replacers.replace).toBeCalledTimes(2);
  });
});
