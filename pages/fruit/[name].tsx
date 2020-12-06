import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
// import path from 'path';

// runs at build time
export const getStaticProps: GetStaticProps = async context => {
  // const fs = require('fs');

  return {
    revalidate: 10,
    props: {
      myFavNum: Math.floor(Math.random() * 10),
    },
  };
};

// getStaticProps only runs at Build Time
//
// localhost:3000/fruit/hello -> take the output -> store on the disk
// localhost:3000/fruit/world -> take the output -> store on the disk
// Done
export const getStaticPaths: GetStaticPaths = async () => {
  // access all the node stuff
  // db, ...

  return {
    paths: [
      {
        params: { name: 'hello' },
      },
      {
        params: { name: 'world' },
      },
    ],
    // fallback: false, // this makes only paths above work
    fallback: true,
    // if fallback = true, the above code is still open to other dynamic paths
    // localhost:3000/fruit/test -> call getStaticProps on server -> render page -> (background) Next.js add this to the path list and store to the file system
    // localhost:3000/fruit/test -> render that file
    // if fallback = true, Next.js will not wait for getStaticProps to finish
  };
};
// only
// localhost:3000/fruit/hello
// localhost:3000/fruit/world
// will work
// localhost:3000/fruit/1 -> will not work

export default function MyFruit(props) {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading...</h1>;
  // in production only the first time of that param will trigger this

  return <h1>Hello {props.myFavNum}</h1>;
}
