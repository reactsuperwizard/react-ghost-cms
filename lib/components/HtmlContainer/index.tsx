import parse from 'html-react-parser';
import { Element } from 'domhandler/lib/node';
import replacers from 'lib/components/HtmlContainer/Replacers';

import type { HTMLReactParserOptions } from 'html-react-parser';

const htmlParserOptions: HTMLReactParserOptions = {
  // @ts-ignore
  replace: (node: Element) => replacers.replace(node),
};

export default function HtmlContainer({ html }: { html: string }) {
  const parsedHtml = parse(html, htmlParserOptions);

  return (
    <div className='html-container'>
      {parsedHtml}
    </div>
  );
}
