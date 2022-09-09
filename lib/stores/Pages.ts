import Data from 'lib/stores/Data';

import type Page from 'lib/stores/Page';

export type PagesType = Array<Page>;

export default class Pages extends Data {
  static async get(): Promise<PagesType> {
    const response: { pages: PagesType } = await super.fetch('/content/pages');

    return response.pages;
  }
}
