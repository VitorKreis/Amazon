/* eslint-disable no-octal-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './ProductCard.css';

function ProjectCard({
  id, name, price, img,
}) {
  const photo = img.map((im) => (
    im.filename
  ));

  // eslint-disable-next-line global-require
  const imagen = '../uploads/1689790413967.jpg';

  return (
        <div className="card-section">
            <div className="card">
        {img.length > 0 ? <img className="card-img-top" src="../uploads/1689790413967.jpg" alt={name} /> : <p>Don't have imagen</p>}
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
