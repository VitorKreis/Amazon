/* eslint-disable no-octal-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './ProductCard.css';

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
        <div className="card-body">
          <p>
            <span>{name}</span>
          </p>
          <p>
R$
<span>{price}</span>
          </p>
        </div>
            </div>
        </div>
  );
}

export default ProjectCard;
