/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
import './home.css';
import { useEffect, useState } from 'react';
import ProjectCard from '../layout/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3110/products').then((res) => res.json()).then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
    <section className="section">
    <div className="card-section">
    {products.map((product) => (
        <ProjectCard key={product.id} name={product.name} price={product.price} img={product.Pictures} />
    ))}
    </div>
    </section>
    </div>
  );
}
export default Home;
