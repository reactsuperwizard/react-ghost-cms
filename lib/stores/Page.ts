import Data from 'lib/stores/Data';

export default class Page extends Data {
  slug: string;

  id: string;

  uuid: string;

  title: string;

  url: string;

  comment_id: string;

  feature_image?: string;

  featured: boolean;

  visibility: string;

  excerpt?: string;

  html: string;

  meta_title?: string;

  meta_description?: string;

  og_image?: string;

  og_title?: string;

  og_description?: string;

  twitter_image?: string;

  twitter_title?: string;

  twitter_description?: string;

  constructor(data: Page) {
    super();

    this.slug = data.slug;
    this.id = data.id;
    this.uuid = data.uuid;
    this.title = data.title;
    this.url = data.url;
    this.comment_id = data.comment_id;
    this.feature_image = data.feature_image;
    this.featured = data.featured;
    this.visibility = data.visibility;
    this.excerpt = data.excerpt;
    this.html = data.html;
    this.meta_title = data.meta_title;
    this.meta_description = data.meta_description;
    this.og_image = data.og_image;
    this.og_title = data.og_title;
    this.og_description = data.og_description;
    this.twitter_image = data.twitter_image;
    this.twitter_title = data.twitter_title;
    this.twitter_description = data.twitter_description;
  }

  static async get(page: string): Promise<Page> {
    const path = `/content/pages/slug/${page}`;
    const response = await super.fetch(path);

    return response.pages[0];
  }
}
