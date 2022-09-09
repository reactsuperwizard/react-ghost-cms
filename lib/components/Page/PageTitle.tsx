export default function PageTitle({ title }: { title: string }) {
  return (
    <div className='mx-4 sm:mx-auto sm:px-4 sm:max-w-2xl my-10'>
      <div className='text-4xl font-bold tracking-wider md:text-5xl lg:text-6xl'>
        {title}
      </div>
    </div>
  );
}
