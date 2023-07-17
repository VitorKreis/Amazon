/* eslint-disable no-octal-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './ProductCard.css';

function ProjectCard({
  id, name, price, img,
}) {
  return (
        <div className="card-section">
            <div className="card">
        <img className="card-img-top" src="c:\Users\Vitor\Desktop\Amazon\back-end\uploads\1689628484178.jpg" alt={name} />
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
