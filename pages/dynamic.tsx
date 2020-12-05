import { GetStaticProps } from 'next';
import path from 'path';

// executed on server
export const getStaticProps: GetStaticProps = async context => {
  const fs = require('fs');
  const txt = fs.readFileSync(
    path.join(process.cwd(), 'public/robots.txt'),
    'utf-8'
  );

  return {
    props: {
      myFavNum: txt,
    },
  };
};

// client + server
export default function Dynamic(props) {
  return <h1>Dynamic number - {props.myFavNum}</h1>;
}
