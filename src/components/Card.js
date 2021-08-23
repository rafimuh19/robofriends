import React from 'react';

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <section className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
      <section>
        <h2>{name}</h2>
        <p>{email}</p>
      </section>
    </section>
  );
}

export default Card;