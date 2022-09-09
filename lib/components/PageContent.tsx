import Page from 'lib/components/Page';

type PageType = {
  title: string
  feature_image?: string
  html: string
};

export default function PageContent({ page }: { page: PageType }) {
  return (
    <Page
      title={page.title}
      image={page.feature_image}
      html={page.html}
      excerpt=''
    />
  );
}
