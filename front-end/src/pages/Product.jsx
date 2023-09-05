/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css';
import Slider from 'react-slick';

function Product() {
  const { id } = useParams();

  const [produto, setProduto] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3110/products/${id}`).then(({ data }) => setProduto(data.products));
  }, []);

  const picture = produto.Pictures;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
        <div className="card-img">
            <Slider {...settings}>
            {picture?.map((pict) => (
                // eslint-disable-next-line import/no-dynamic-require, global-require
                <img key={pict.id} className="imagen" src={require(`../uploads/${pict.filename}`)} alt={pict.originalname} />
            ))}
            </Slider>
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
