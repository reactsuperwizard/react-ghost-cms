import Data from 'lib/stores/Data';
import NavigationItem from 'lib/stores/NavigationItem';

export default class Site extends Data {
  title: string;

  description: string;

  logo?: string;

  cover_image?: string;

  icon?: string;

  url: string;

  navigation: Array<NavigationItem>;

  secondary_navigation: Array<NavigationItem>;

  meta_title?: string;

  meta_description?: string;

  og_image?: string;

  og_title?: string;

  og_description?: string;

  twitter_image?: string;

  twitter_title?: string;

  twitter_description?: string;

  constructor(data: Site) {
    super();

    this.title = data.title;
    this.description = data.description;
    this.logo = data.logo;
    this.cover_image = data.cover_image;
    this.icon = data.icon;
    this.url = data.url;
    this.navigation = data.navigation;
    this.secondary_navigation = data.secondary_navigation;
    this.meta_title = data.meta_title;
    this.meta_description = data.meta_description;
    this.og_image = data.og_image;
    this.og_title = data.og_title;
    this.og_description = data.og_description;
    this.twitter_image = data.twitter_image;
    this.twitter_title = data.twitter_title;
    this.twitter_description = data.twitter_description;
  }

  static async get(): Promise<Site> {
    const { settings } = await super.fetch('/content/settings');

    return settings;
  }
}
