/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './product.css';

import { GrNext, GrPrevious, GrLinkPrevious } from 'react-icons/gr';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Product() {
  const { id } = useParams();

  const [produto, setProduto] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3110/products/${id}`).then(({ data }) => setProduto(data.products));
  }, []);

  const picture = produto.Pictures;

  return (
    <div className="container">
        <div className="card-img">
            <Link className="icon-prev" to="/"><GrLinkPrevious fontSize={29} /></Link>
            <Carousel
              showThumbs
              showStatus
              nextIcon={<span><GrNext /></span>}
              prevIcon={<span><GrPrevious /></span>}
              fade
              style={{
                display: 'flex', width: 'auto', padding: 150, margin: 10, position: 'relative',
              }}
            >
                {picture?.map((pict) => (
                    // eslint-disable-next-line import/no-dynamic-require, global-require
                    <Carousel.Item>
                        <img key={pict.id} className="imagen" src={require(`../../../back-end/uploads/${pict.filename}`)} alt={pict.originalname} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>

        <div className="card">
                <h3 className="name">{produto.name}</h3>
                <p className="description">{produto.description}</p>
                <span>
R$
{produto.price}
                </span>
            <div className="buttons">
                <button className="btn-add" type="button">Add to cart</button>
                <button className="btn-buy" type="button">Buy</button>
            </div>
        </div>

    </div>

  );
}

export default Product;
