import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import config from 'config';
import SubscribeForm from 'lib/components/form/SubscribeForm';

describe('SubscribeForm', () => {
  let wrapper: ShallowWrapper;
  const originalSubscribeForm = config.subscribeForm;

  beforeAll(() => {
    config.subscribeForm = 'https://example.com/form';

    wrapper = shallow(
      <SubscribeForm>
        <input className='child-submit' />
      </SubscribeForm>,
    );
  });

  afterAll(() => {
    config.subscribeForm = originalSubscribeForm;
  });

  it('should mount', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have action, method and target attributes', () => {
    const form = wrapper.find('form');

    expect(form.exists()).toBeTruthy();
    expect(form.is('form[method="post"]')).toBeTruthy();
    expect(form.is('form[target="popupwindow"]')).toBeTruthy();
    expect(form.is('form[action="https://example.com/form"]')).toBeTruthy();
  });

  it('should mount the children', () => {
    expect(wrapper.children()).toContainEqual(<input className='child-submit' />);
  });
});
