import type { Element } from 'domhandler/lib/node';

import LinkReplacer from './LinkReplacer';
import ImageReplacer from './ImageReplacer';

interface Replacer {
  canReplace: (node: Element) => boolean
  replace: (node: Element) => JSX.Element | null
}

const replacers: Array<Replacer> = [
  LinkReplacer,
  ImageReplacer,
];

export default class Replacers {
  private static get(node: Element): Replacer | undefined {
    return replacers.find((replacer) => replacer.canReplace(node));
  }

  static replace(node: Element): JSX.Element | null {
    // if this node is not an element, bail
    if (node.type !== 'tag') {
      return null;
    }

    const replacer = this.get(node);

    if (!replacer) {
      return null;
    }

    return replacer.replace(node);
  }
}
