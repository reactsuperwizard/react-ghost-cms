import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import PageTitle from 'lib/components/Page/PageTitle';

describe('Page/PageTitle', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(
      <PageTitle
        title='my page'
      />,
    );
  });

  it('should mount', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should contain the title', () => {
    expect(wrapper.text()).toEqual('my page');
  });
});
