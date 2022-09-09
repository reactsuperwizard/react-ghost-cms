import DateAndTime from 'lib/components/Page/DateAndTime';

type Props = {
  title: string,
  excerpt: string,
  image?: string,
  publishedAt?: string,
  readingTime?: number,
};

export default function PageCover({
  title, excerpt, image, publishedAt, readingTime,
}: Props) {
  const style = { height: 'min(max(70vh, 350px), 500px)' };
  const content = (
    <div className='absolute left-0 right-0 bottom-0 ml-4 mr-10 py-4 md:mr-4'>
      <div className='sm:mx-auto sm:px-4 sm:max-w-2xl'>
        <div className='text-4xl text-gray-100 font-bold tracking-wider md:text-5xl lg:text-6xl'>
          {title}
        </div>
        <div className='text-medium text-gray-100 font-light my-4 leading-6'>
          {excerpt}
        </div>
        {
          !!publishedAt && typeof readingTime === 'number' && (
            <DateAndTime publishedAt={publishedAt} readingTime={readingTime} />
          )
        }
      </div>
    </div>
  );

  if (image) {
    return (
      <div
        style={{
          ...style,
          backgroundImage: `url(${image})`,
        }}
        className='bg-fixed bg-center bg-cover bg-no-repeat relative mb-10'
      >
        <div className='absolute inset-0 backdrop-filter backdrop-blur-sm backdrop-brightness-50' />
        {content}
      </div>
    );
  }

  return (
    <div
      style={style}
      className='bg-gradient-to-r from-blue-500 md:via-purple-400 to-green-500 relative mb-10'
    >
      {content}
    </div>
  );
}
PageCover.defaultProps = {
  image: undefined,
  publishedAt: undefined,
  readingTime: undefined,
};
