import Logo from 'lib/components/Logo';
import Navigation from 'lib/components/Header/Navigation';

import type NavigationItem from 'lib/stores/NavigationItem';

type Props = {
  title: string
  logo?: string
  navigation: Array<NavigationItem>
};

export default function Header({ title, logo, navigation }: Props) {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between items-center p-4 sm:px-8'>
      <Logo logo={logo} title={title} />
      <Navigation items={navigation} />
    </div>
  );
}

Header.defaultProps = {
  logo: undefined,
};
