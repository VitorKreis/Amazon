/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
import './home.css';
import React from 'react';

function Home() {
  return (
    <div className="container">
        <h2 className="title">More liked</h2>
        <section className="section">
       <div className="card">
        <h1 className="card-img-top"><img src="https://www.allugator.com/static/media/iphonemobile.b3db6e9b.png" alt="Iphone 13 Plus" /></h1>
        <div className="card-body">
          <p>
            Name:<span>Iphone 13 Plus</span>
          </p>
          <p>
            Price:<span>R$5.500</span>
          </p>
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
        </div>
       </div>
       <div className="card">
        <h1 className="card-img-top">Img iphone</h1>
        <div className="card-body">
          <p>
            <span>Iphone 12 plus</span>
          </p>
        </div>
       </div>
       <div className="card">
        <h1 className="card-img-top">Img Iphone</h1>
        <div className="card-body">
          <p>
            <span>Iphone 12 plus</span>
          </p>
        </div>
       </div>
       <div className="card">
        <h1 className="card-img-top">Img iphone</h1>
        <div className="card-body">
          <p>
            <span>Iphone 12 plus</span>
          </p>
        </div>
       </div>
        </section>
    </div>
  );
}
export default Home;
