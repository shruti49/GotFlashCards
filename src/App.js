import React, { Component } from "react";
import CardList from "./components/CardList";
import { gotcaste } from "./components/got";
import Searchbox from "./components/Searchbox";
import Scroll from "./components/Scroll";

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

  //FILTERING THE ARRAY ACCORDING TO THE SEARCHFIELD
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
        <Scroll>
          <CardList arr={filteredChars} />
        </Scroll>
      </div>
    );
  }
}
