import { useState } from 'react';
import { trpc } from '../trpc';
import { keepPreviousData } from '@tanstack/react-query';

export default function IndexPage() {
  const [name] = useState('Bob');
  const [messageType, setMessageType] = useState<'hello' | 'goodbye'>('hello');
  const helloQuery = trpc.hello.useQuery(
    { name },
    {
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData,
    },
  );
  const goodbyeMutation = trpc.goodbye.useMutation();

  return (
    <div>
      <p>
        {helloQuery.isPending
          ? 'Loading...'
          : messageType === 'goodbye'
            ? goodbyeMutation.data?.farewell
            : helloQuery.data?.greeting}
      </p>
      <button
        onClick={async () => {
          await goodbyeMutation.mutateAsync({ name });
          setMessageType('goodbye');
        }}
      >
        Say Goodbye
      </button>
      <button
        onClick={() => {
          setMessageType('hello');
          helloQuery.refetch();
        }}
      >
        Say Hello
      </button>
    </div>
  );
}
