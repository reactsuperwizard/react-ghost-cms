import Link from 'next/link';
import { attributesToProps, domToReact } from 'html-react-parser';

import type { Element } from 'domhandler/lib/node';

export default class LinkReplacer {
  static canReplace(node: Element): boolean {
    return node.name === 'a' && Boolean(node.attribs && node.attribs.href);
  }

  static replace(node: Element): JSX.Element | null {
    if (!node.attribs || !node.attribs.href) {
      return null;
    }

    return (
      <Link href={node.attribs.href}>
        { /* @ts-ignore */ }
        <node.name
          {// eslint-disable-line react/jsx-props-no-spreading
            ...attributesToProps(node.attribs)
          }
        >
          {domToReact(node.children)}
        </node.name>
      </Link>
    );
  }
}
