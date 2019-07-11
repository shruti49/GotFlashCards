import React from "react";
import { Card } from "../Card/card-component";
import "../CardList/card-list.styles.css";

//FUNCTIONAL COMPONENT
export const CardList = ({ arr }) => {
  return (
    <div className="grid-container">
      {/*Mapping the filtered array and passing the props to card component*/}
      {arr.map((user, i) => {
        return <Card key={i} user={user} />;
      })}
    </div>
  );
};
