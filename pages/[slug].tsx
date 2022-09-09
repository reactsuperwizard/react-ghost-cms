import Pages from 'lib/stores/Pages';
import Posts from 'lib/stores/Posts';
import Page from 'lib/stores/Page';
import Post from 'lib/stores/Post';
import Site from 'lib/stores/Site';
import Meta from 'lib/components/Meta';
import PageContainer from 'lib/components/PageContainer';
import PostContent from 'lib/components/PostContent';
import PageContent from 'lib/components/PageContent';

import type { GetStaticProps, GetStaticPaths } from 'next';

interface PageProps {
  type: 'page'
  page: Page
  site: Site
}

interface PostProps {
  type: 'post'
  post: Post
  site: Site
}

type Props = PageProps | PostProps;

export default function PageComponent(props: Props) {
  const { site } = props;
  const {
    title,
    url,
    excerpt,
    meta_title: metaTitle,
    meta_description: metaDescription,
    og_image: ogImage,
    og_title: ogTitle,
    og_description: ogDescription,
    twitter_image: twitterImage,
    twitter_title: twitterTitle,
    twitter_description: twitterDescription,
  } = (
    // eslint-disable-next-line react/destructuring-assignment
    props.type === 'page' ? props.page : props.post
  );

  return (
    <div>
      <Meta
        title={title}
        url={url}
        icon={site.icon}
        description={excerpt}
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        ogImage={ogImage}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        twitterImage={twitterImage}
        twitterTitle={twitterTitle}
        twitterDescription={twitterDescription}
      />
      <PageContainer
        title={site.title}
        description={site.description}
        navigation={site.navigation}
        secondaryNavigation={site.secondary_navigation}
        logo={site.logo}
      >
        {
          // eslint-disable-next-line react/destructuring-assignment
          props.type === 'page' ? (

            // eslint-disable-next-line react/destructuring-assignment
            <PageContent page={props.page} />
          ) : (

            // eslint-disable-next-line react/destructuring-assignment
            <PostContent post={props.post} />
          )
        }
      </PageContainer>
    </div>
  );
}

type ParamType = {
  slug: string
};

export const getStaticPaths: GetStaticPaths<ParamType> = async function getStaticPaths() {
  const [pages, posts] = await Promise.all([
    Pages.get(),
    Posts.get(),
  ]);

  return {
    paths: [...posts, ...pages].map((data) => ({
      params: {
        slug: data.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, ParamType> = async function getStaticProps({
  params,
}) {
  if (!params) {
    throw new Error('Invalid params');
  }

  const site = await Site.get();
  const post = await Post.get(params.slug).catch(() => { /* noop */ });

  if (post) {
    return {
      props: {
        type: 'post',
        post,
        site,
      },
    };
  }

  // fallback - this must be a page
  const page = await Page.get(params.slug);

  return {
    props: {
      type: 'page',
      page,
      site,
    },
  };
};
