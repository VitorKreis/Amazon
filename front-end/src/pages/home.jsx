/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
import './home.css';
import React from 'react';

function Home() {
  return (
    <div className="container">
    <section className="section">
       <div className="card-section">
        <div className="card">
        <h1 className="card-img-top"><img src="https://www.allugator.com/static/media/iphonemobile.b3db6e9b.png" alt="Iphone 13 Plus" /></h1>
        <div className="card-body">
          <p>
            Name:<span>Iphone 13 Plus</span>
          </p>
          <p>
            Price:<span>R$5.500</span>
          </p>
          <button className="buy" type="button">Buy</button>
          <button className="add_cart" type="button">Add to cart</button>
        </div>
        </div>
       <div className="card">
        <h1 className="card-img-top"><img src="https://i.zst.com.br/thumbs/12/0/2f/-758153808.jpg" alt="Samsung Z-Flip" /></h1>
        <div className="card-body">
          <p>
            Name:<span>Samsung Z-Flip</span>
          </p>
          <p>
            Price:<span>R$4.500</span>
          </p>
          <button className="buy" type="button">Buy</button>
          <button className="add_cart" type="button">Add to cart</button>
        </div>
       </div>
       <div className="card">
        <h1 className="card-img-top"><img src="https://m.media-amazon.com/images/I/61ykl4wsysL.jpg" alt="Xiaome 8 Pro" /></h1>
        <div className="card-body">
        <p>
            Name:<span>Xiame 8 Pro</span>
        </p>
          <p>
            Price:<span>R$2.500</span>
          </p>
          <button className="buy" type="button">Buy</button>
          <button className="add_cart" type="button">Add to cart</button>
        </div>
       </div>
       <div className="card">
        <h1 className="card-img-top"><img src="https://www.jbl.com.br/on/demandware.static/-/Sites-JB-BR-Library/default/dw5f856f6a/glp/fones-de-ouvido/images/fone-de-ouvido-jbl-tune-510BT-2.png" alt="Fone de ouvido JBL" /></h1>
        <div className="card-body">
        <p>
            Name:<span>Fone de Ouvido JBL</span>
        </p>
          <p>
            Price:<span>R$200</span>
          </p>
          <button className="buy" type="button">Buy</button>
          <button className="add_cart" type="button">Add to cart</button>
        </div>
       </div>
       <div className="card">
        <h1 className="card-img-top"><img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/decf1bf1-17fc-4ffd-9f1b-b59039d2ce92.__CR0,0,970,600_PT0_SX970_V1___.png" alt="MacBook" /></h1>
        <div className="card-body">
        <p>
            Name:<span>Mac Book Air</span>
        </p>
          <p>
            Price:<span>R$10.000</span>
          </p>
          <button className="buy" type="button">Buy</button>
          <button className="add_cart" type="button">Add to cart</button>
        </div>
       </div>
       <div className="card">
        <h1 className="card-img-top"><img src="https://m.media-amazon.com/images/I/71PXaTrJZQL._AC_UF350,350_QL80_.jpg" alt="Notebook Lenovo Gamer" /></h1>
        <div className="card-body">
        <p>
            Name:<span>Notebook Lenovo Gamer</span>
        </p>
          <p>
            Price:<span>R$6.550</span>
          </p>
          <button className="buy" type="button">Buy</button>
          <button className="add_cart" type="button">Add to cart</button>
        </div>
       </div>
       </div>
    </section>
    </div>
  );
}
export default Home;
