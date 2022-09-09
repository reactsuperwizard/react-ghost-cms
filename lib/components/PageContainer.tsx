import Header from 'lib/components/Header';
import Footer from 'lib/components/Footer';

import type NavigationItem from 'lib/stores/NavigationItem';

type Props = {
  title: string
  description: string
  logo?: string
  navigation: Array<NavigationItem>
  secondaryNavigation: Array<NavigationItem>
  children: JSX.Element | Array<JSX.Element>
};

export default function PageContainer({
  title,
  logo,
  description,
  navigation,
  secondaryNavigation,
  children,
}: Props) {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header
        title={title}
        navigation={navigation}
        logo={logo}
      />
      {children}
      <Footer
        title={title}
        description={description}
        secondaryNavigation={secondaryNavigation}
        logo={logo}
      />
    </div>
  );
}

PageContainer.defaultProps = {
  logo: undefined,
};
