import SubscribeForm from 'lib/components/form/SubscribeForm';
import Input from 'lib/components/form/Input';
import Button from 'lib/components/form/Button';

export default function Subscription() {
  return (
    <div className='flex flex-col items-center sm:items-end mb-10 sm:mb-0 sm:ml-10'>
      <div className='text-lg font-medium antialiased py-2 px-1'>
        Get the latest posts directly to your inbox!
      </div>
      <div className='flex-1 flex flex-col flex-wrap'>
        <SubscribeForm>
          <Input type='text' isRequired name='email' placeholder='Email' fluid />
          <Button type='primary' inputType='submit' value='Subscribe' fluid />
        </SubscribeForm>
      </div>
    </div>
  );
}
