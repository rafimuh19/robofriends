import React from 'react';

const Scroll = (props) => {
  return (
    <section style={{ overflowY: "scroll", border: "2px solid #000", height: "77vh" }}>
      {props.children}
    </section>
  );
};

export default Scroll;