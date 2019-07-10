import React from "react";
import Card from "../Card/card-component";
import '../CardList/cardList-styles.css'

const CardList = props => {
  return (
    <div className="grid-container">
      {/*Mapping the filtered array and passing the props to card component*/}
      {props.arr.map((user, i) => {
        return (
          <Card key={i} src={user.src} name={user.name} house={user.house} />
        );
      })}
    </div>
  );
};

export default CardList;
