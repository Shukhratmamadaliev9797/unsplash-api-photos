import React from "react";

const Heading = (props) => {
  return (
    <div className="heading__box">
      <h1 className="heading__text">{props.header__text}</h1>
    </div>
  );
};

export default Heading;
