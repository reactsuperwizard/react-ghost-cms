import Image from 'next/image';
import { attributesToProps } from 'html-react-parser';
import type { Element } from 'domhandler/lib/node';

export default class ImageReplacer {
  static canReplace(node: Element): boolean {
    return node.name === 'img' && Boolean(
      node.attribs && node.attribs.src && node.attribs.height && node.attribs.width,
    );
  }

  static replace(node: Element): JSX.Element | null {
    if (!node.attribs || !node.attribs.src || !node.attribs.height || !node.attribs.width) {
      return null;
    }

    const props = attributesToProps(node.attribs);

    return (
      // @ts-ignore
      <Image
        src={props.src}
        className={props.className}
        width={props.width}
        height={props.height}
      />
    );
  }
}
