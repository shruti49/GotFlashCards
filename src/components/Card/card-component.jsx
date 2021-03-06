import React from "react";

//FUNCTIONAL COMPONENT
export const Card = props => {
  const { src, name, house } = props.user;
  return (
    /*creating a  card*/
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ">
      <img
        alt="gotcaste"
        src={`${src}`}
        style={{ width: "250px", height: "240px" }}
      />
      <h2>{name}</h2>
      <p>{house}</p>
    </div>
  );
};
