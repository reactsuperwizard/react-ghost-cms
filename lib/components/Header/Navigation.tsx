import Link from 'next/link';

import type NavigationItem from 'lib/stores/NavigationItem';

export default function Navigation({ items }: { items: Array<NavigationItem> }) {
  return (
    <div className='flex flex-wrap font-mono text-gray-500 dark:text-gray-400 mt-6 sm:mt-0 space-x-4'>
      {
        items.map((item) => (
          <span key={item.label} className='flex-1 hover:underline whitespace-pre'>
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
