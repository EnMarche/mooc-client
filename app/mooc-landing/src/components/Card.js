import React from 'react';

const Card = (props) => {
  const { image, title, description, duration, slug } = props;
  return (
    <div className="card">
      <div>
        <a href={`/${slug}`}>
          <img alt="thumbnail" src={image} />
          <div className="card__content">
            <h4>{title}</h4>
            <p>{description}</p>
            <span>
              Durée : {duration} {duration > 1 ? 'semaines' : 'semaine'}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
