import Head from 'next/head';

type MetaProps = {
  title: string
  description?: string
  image?: string
  icon?: string
  url: string
  metaTitle?: string
  metaDescription?: string
  ogImage?: string
  ogTitle?: string
  ogDescription?: string
  twitterImage?: string
  twitterTitle?: string
  twitterDescription?: string
  charset?: string
};

export default function Meta(props: MetaProps) {
  const {
    title,
    description,
    image,
    icon,
    url,
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    ogImage,
    twitterImage,
    twitterTitle,
    twitterDescription,
    charset,
  } = props;

  return (
    <Head>
      <title>{metaTitle || title}</title>

      <meta name='description' content={metaDescription || description} />
      { charset && (<meta charSet={charset} />) }
      { icon && (<link rel='shortcut icon' href={icon} />) }

      { /* Open Graph */ }
      <meta property='og:site_name' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={ogTitle || metaTitle || title} />
      <meta property='og:description' content={ogDescription || metaDescription || description} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={ogImage || image} />

      { /* Twitter */ }
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={twitterTitle || metaTitle || title} />
      <meta name='twitter:description' content={twitterDescription || metaDescription || description} />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:image' content={twitterImage || image} />
    </Head>
  );
}

Meta.defaultProps = {
  description: '',
  image: '',
  icon: '',
  metaTitle: '',
  metaDescription: '',
  ogImage: '',
  ogTitle: '',
  ogDescription: '',
  twitterImage: '',
  twitterTitle: '',
  twitterDescription: '',
  charset: 'utf-8',
};
