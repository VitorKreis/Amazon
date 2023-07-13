/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './ProductCard.css';

function ProjectCard({
  id, name, price,
}) {
  return (
        <div className="card-section">
            <div className="card">
        <img className="card-img-top" src="https://www.allugator.com/static/media/iphonemobile.b3db6e9b.png" alt="Iphone 13 Plus" />
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
