import React, { Component } from "react";
import CardList from "./CardList";
import { gotcaste } from "./got";
import Searchbox from "./Searchbox";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gotcaste: gotcaste,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredChars = this.state.gotcaste.filter(char => {
      return char.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">GOT FLASH CARDS</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <CardList arr={filteredChars} />
      </div>
    );
  }
}
