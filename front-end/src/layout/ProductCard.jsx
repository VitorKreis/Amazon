/* eslint-disable no-octal-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './ProductCard.css';

import { Link } from 'react-router-dom';

function ProjectCard({
  id, name, price, img,
}) {
  return (
        <div className="card-section">
            <div className="card">
            {img.length > 0 && img.map((picture) => (
                // eslint-disable-next-line import/no-dynamic-require, global-require
                <img className="card-img-top" src={require(`../uploads/${picture.filename}`)} alt={picture.originalname} />
            ))}
        <Link to={`/product/${id}`} className="card-body">
          <p>
            <span>{name}</span>
          </p>
          <p>
R$
<span>{price}</span>
          </p>
        </Link>
            </div>
        </div>
  );
}

export default ProjectCard;
