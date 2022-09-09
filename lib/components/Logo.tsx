import Image from 'next/image';
import Link from 'next/link';
import classnames from 'tailwindcss-classnames';

export type Props = {
  logo?: string
  title: string
};

export default function Logo({ logo, title }: Props) {
  return (
    <div className='break-words'>
      <Link href='/'>
        <a href='/'>
          {logo ? (
            <Image
              src={logo}
              alt={title}
              layout='fill'
            />
          ) : (
            <span
              className={classnames(
                'font-sans',
                'font-medium',
                'text-3xl',
                'antialiased',
                'hover:text-blue-500',
                'transition-colors',
                'duration-700',
              )}
            >
              {title}
            </span>
          )}
        </a>
      </Link>
    </div>
  );
}

Logo.defaultProps = {
  logo: null,
};
