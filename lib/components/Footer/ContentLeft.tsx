import Logo from 'lib/components/Logo';
import Description from 'lib/components/Footer/Description';
import Social from 'lib/components/Footer/Social';

export default function ContentLeft({ title, logo, description }: {
  title: string,
  logo?: string,
  description: string,
}) {
  return (
    <div className='flex-1'>
      <Logo title={title} logo={logo} />
      <Description description={description} />
      <Social />
    </div>
  );
}

ContentLeft.defaultProps = {
  logo: undefined,
};
