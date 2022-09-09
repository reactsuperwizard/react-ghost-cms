import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import DateAndTime from 'lib/components/Page/DateAndTime';

describe('Page/DateAndTime', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(
      <DateAndTime
        publishedAt='2021-06-18T00:00:00.682Z'
        readingTime={2}
      />,
    );
  });

  it('should mount', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should have plural unit for reading time > 1', () => {
    const time = wrapper.text();

    expect(time).toEqual('June 18th, 2021 – 2 mins read');
  });

  it('should have singular unit for reading time == 1', () => {
    wrapper = shallow(
      <DateAndTime
        publishedAt='2021-06-18T21:04:20.682Z'
        readingTime={1}
      />,
    );

    const time = wrapper.text();

    expect(time).toEqual('June 18th, 2021 – 1 min read');
  });
});
