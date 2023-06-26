import { useEffect, useState } from 'react';

function Product() {
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const Products = useEffect(() => {
    fetch('http://localhost:3110/products').then((res) => res.json()).then((data) => setProducts(data));
  }, []);

  console.log(products.map((product) => product));

  return (
    <h1>Hello World</h1>
  );
}

export default Product;
