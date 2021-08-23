import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error('Error found in CardList Component')
  // }
  return (
    <section>
      {
        robots.map(robot => {
          return (
            <Card 
              key={robot.id} 
              id={robot.id} 
              name={robot.name} 
              email={robot.email} 
            />
          );
        })
      }
    </section>
  );
}

export default CardList;