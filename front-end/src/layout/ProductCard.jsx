/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-octal-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './productCard.css';

import { Link } from 'react-router-dom';

function ProjectCard({
  id, name, price, img,
}) {
  return (
        <div className="card-section">
            <div className="card">
                <img className="card-img-top" src={require(`../../../back-end/uploads/${img[0].filename}`)} alt={img[0].originalname} />
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
