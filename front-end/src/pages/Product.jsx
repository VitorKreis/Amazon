/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
  const { id } = useParams();

  const [produto, setProduto] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3110/products/${id}`).then(({ data }) => setProduto(data.products));
  }, []);

  console.log(produto.Pictures);

  return (
    <div className="container">
        <div />
        <div className="text">
            <h3>{produto.name}</h3>
        </div>
        <div className="price">
            <span>{produto.price}</span>
        </div>

    </div>

  );
}

export default Product;
