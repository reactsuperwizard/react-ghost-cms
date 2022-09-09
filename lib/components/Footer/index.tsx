import classnames from 'tailwindcss-classnames';

import ContentRight from 'lib/components/Footer/ContentRight';
import ContentLeft from 'lib/components/Footer/ContentLeft';
import SecondaryNavigation from 'lib/components/Footer/SecondaryNavigation';

import type NavigationItem from 'lib/stores/NavigationItem';

type Props = {
  title: string
  description: string
  logo?: string
  secondaryNavigation: Array<NavigationItem>
};

export default function Footer({
  title,
  description,
  logo,
  secondaryNavigation,
}: Props) {
  return (
    <div
      className={classnames(
        'mx-auto',
        'my-16',
        'max-w-4xl',
        'md:mx-0',
        'md:max-w-none',
      )}
    >
      <div
        className={classnames(
          'flex',
          'flex-col',
          'items-center',
          'items-start',
          'space-y-8',
          'py-5',
          'px-4',
          'sm:flex-row-reverse',
          'sm:justify-between',
          'sm:space-y-0',
          'sm:py-10',
          'sm:px-8',
        )}
      >
        <ContentRight />
        <ContentLeft
          title={title}
          description={description}
          logo={logo}
        />
      </div>
      <SecondaryNavigation items={secondaryNavigation} />
    </div>
  );
}

Footer.defaultProps = {
  logo: undefined,
};
