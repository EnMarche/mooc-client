import React from 'react';
import Card from './Card';
import Incoming from './Incoming';
const Grid = (props) => {
  return (
    <div>
      <div className="grid">
        {props.moocs.map((mooc, i) => {
          return (
            <Card
              title={mooc.title}
              description={mooc.description}
              duration={mooc.chapter_count}
              image={mooc.image}
              slug={mooc.slug}
            />
          );
        })}
      </div>
      <Incoming />
    </div>
  );
};

export default Grid;
