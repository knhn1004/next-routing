// dynamic routing
import { useRouter } from 'next/router';
import { Fragment } from 'react';

export default function FruitName() {
  const router = useRouter();
  console.log(router);

  function takeMeHome() {
    router.push('/');
  }

  return (
    <Fragment>
      <h1>
        Hello {router.query.name} {router.query.subname}
      </h1>
      <button onClick={takeMeHome}>Home</button>
    </Fragment>
  );
}

// localhost:3000/fruit/apple/1
