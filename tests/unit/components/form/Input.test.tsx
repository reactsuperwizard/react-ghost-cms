import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import Input from 'lib/components/form/Input';

describe('Input', () => {
  describe('of type text', () => {
    let wrapper: ShallowWrapper;

    beforeAll(() => {
      wrapper = shallow(<Input
        type='text'
        name='email'
        placeholder='email@example.com'
      />);
    });

    it('should mount', () => {
      expect(wrapper.exists()).toBeTruthy();
    });

    it('should have type, name, required and placeholder set', () => {
      const input = wrapper.find('input');

      expect(input.exists()).toBeTruthy();
      expect(input.is('input[type="text"]')).toBeTruthy();
      expect(input.is('input[name="email"]')).toBeTruthy();
      expect(input.prop('required')).toEqual(false);
      expect(input.is('input[placeholder="email@example.com"]')).toBeTruthy();
    });

    it('should be required if `isRequest` prop is passed', () => {
      const input = shallow(<Input
        type='text'
        name='email'
        placeholder='email@example.com'
        isRequired
      />).find('input');

      expect(input.prop('required')).toEqual(true);
    });
  });
});
