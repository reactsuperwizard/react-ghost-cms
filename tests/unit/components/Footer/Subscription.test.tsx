import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import Subscription from 'lib/components/Footer/Subscription';

describe('Footer/Subscription', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<Subscription />);
  });

  it('should mount', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should have subscribe form', () => {
    const form = wrapper.find('SubscribeForm');

    expect(form.exists()).toEqual(true);

    const input = form.find('Input').at(0);
    const button = form.find('Input').at(1);

    expect(input.exists()).toEqual(true);
    expect(input.prop('name')).toEqual('email');
    expect(button.exists()).toEqual(true);
    expect(button.prop('inputType')).toEqual('submit');
  });
});
