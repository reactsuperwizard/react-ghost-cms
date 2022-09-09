import Posts from 'lib/stores/Posts';
import Site from 'lib/stores/Site';
import Meta from 'lib/components/Meta';
import PageContainer from 'lib/components/PageContainer';
import PostList from 'lib/components/PostList';

import type { GetStaticProps } from 'next';
import type { PostsType } from 'lib/stores/Posts';

type Props = {
  posts: PostsType
  site: Site
};

export default function Home({ posts, site }: Props) {
  return (
    <div>
      <Meta
        title={site.title}
        url={site.url}
        icon={site.icon}
        description={site.description}
        metaTitle={site.meta_title}
        metaDescription={site.meta_description}
        ogImage={site.og_image}
        ogTitle={site.og_title}
        ogDescription={site.og_description}
        twitterImage={site.twitter_image}
        twitterTitle={site.twitter_title}
        twitterDescription={site.twitter_description}
      />
      <PageContainer
        title={site.title}
        description={site.description}
        navigation={site.navigation}
        secondaryNavigation={site.secondary_navigation}
        logo={site.logo}
      >
        <PostList posts={posts} />
      </PageContainer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async function getStaticProps() {
  const [posts, site] = await Promise.all([
    Posts.get(),
    Site.get(),
  ]);

  return {
    props: {
      posts,
      site,
    },
  };
};
