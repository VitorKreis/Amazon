import { useEffect, useState } from 'react';

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3110/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json()).then((data) => setProducts(data));
  }, []);

  console.log(products.keys);

  return (
<h1>Hello</h1>
  );
}

export default Product;
