export default function Description({ description }: { description: string }) {
  return (
    <div className='antialiased font-medium text-sm py-2'>
      {description}
    </div>
  );
}
