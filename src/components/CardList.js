import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
  render() {
    return (
      <div>
        {/*Mapping the filtered array and passing the props to card component*/}
        {this.props.arr.map((user, i) => {
          return (
            <Card key={i} src={user.src} name={user.name} house={user.house} />
          );
        })}
      </div>
    );
  }
}
