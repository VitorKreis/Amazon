/* eslint-disable no-octal-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Photo from './Photo';
import './ProductCard.css';

function ProjectCard({
  id, name, price, img,
}) {
  return (
        <div className="card-section">
            {img.length > 0 && img.map((picture) => (
                <Photo className="card-img-top" url={picture.filename} name={picture.originalname} />
            ))}
            <div className="card">
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
