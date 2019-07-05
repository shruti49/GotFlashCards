import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { src, name, house } = this.props;
    return (
      /*creating a  card*/
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ">
        <img
          alt="gotcaste"
          src={`${src}`}
          style={{ width: "200px", height: "200px" }}
        />
        <h2>{name}</h2>
        <p>{house}</p>
      </div>
    );
  }
}
