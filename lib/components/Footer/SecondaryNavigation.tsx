import Link from 'next/link';

import type NavigationItem from 'lib/stores/NavigationItem';

export default function SecondaryNavigation({ items }: { items: Array<NavigationItem> }) {
  return (
    <div className='flex justify-center space-x-4 my-4 px-4 sm:px-8 text-sm text-gray-500 dark:text-gray-400'>
      {
        items.map((item) => (
          <span key={item.label} className='hover:underline whitespace-pre'>
            <Link href={item.url}>
              <a href={item.url}>
                {item.label}
              </a>
            </Link>
          </span>
        ))
      }
    </div>
  );
}
