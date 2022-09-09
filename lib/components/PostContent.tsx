import Page from 'lib/components/Page';

type Post = {
  title: string
  html: string
  excerpt?: string
  feature_image?: string
  published_at?: string
  reading_time: number
};

export default function PostContent({ post }: { post: Post }) {
  return (
    <Page
      hasCover
      title={post.title}
      excerpt={post.excerpt || ''}
      image={post.feature_image}
      publishedAt={post.published_at}
      readingTime={post.reading_time}
      html={post.html}
    />
  );
}
