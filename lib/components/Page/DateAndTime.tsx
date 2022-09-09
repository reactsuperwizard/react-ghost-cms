import moment from 'moment';

type Props = {
  publishedAt: string,
  readingTime: number
};

export default function DateAndTime({ publishedAt, readingTime }: Props) {
  const date = moment(publishedAt).format('MMMM Do, YYYY');
  const unit = readingTime === 1 ? 'min' : 'mins';

  return (
    <div className='font-mono text-xs text-gray-100 antialiased'>
      {`${date} – ${readingTime} ${unit} read`}
    </div>
  );
}
