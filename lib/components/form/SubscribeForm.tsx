import config from 'config';

type Props = {
  children: JSX.Element | Array<JSX.Element>,
};

export default function SubscribeForm({ children }: Props) {
  return (
    <form
      action={config.subscribeForm}
      method='post'
      target='popupwindow'
    >
      {children}
    </form>
  );
}
