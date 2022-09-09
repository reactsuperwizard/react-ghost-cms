import HtmlContainer from 'lib/components/HtmlContainer';
import PageCover from 'lib/components/Page/PageCover';
import PageTitle from 'lib/components/Page/PageTitle';

type Props = {
  title: string,
  html: string,
  hasCover?: boolean
  excerpt: string,
  image?: string,
  publishedAt?: string,
  readingTime?: number,
};

export default function Page({
  title, excerpt, image, publishedAt, readingTime, html, hasCover,
}: Props) {
  return (
    <div>
      {hasCover ? (
        <PageCover
          title={title}
          excerpt={excerpt}
          image={image}
          publishedAt={publishedAt}
          readingTime={readingTime}
        />
      ) : (
        <PageTitle
          title={title}
        />
      )}
      <div className='px-4 sm:px-4 sm:mx-auto sm:max-w-2xl'>
        <HtmlContainer html={html} />
      </div>
    </div>
  );
}
Page.defaultProps = {
  hasCover: false,
  image: undefined,
  publishedAt: undefined,
  readingTime: undefined,
};
