// dynamic routing
export default function FruitName() {
  return <h1>Hello</h1>;
}

// http://localhost:3000/fruit/apple works
// http://localhost:3000/fruit/lemon works
// http://localhost:3000/fruit -> doesn't work
// http://localhost:3000/fruit/123/456 -> doesn't work
