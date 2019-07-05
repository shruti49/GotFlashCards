import React, { Component } from "react";
import CardList from "./components/CardList";
import { gotcaste } from "./components/got";
import Searchbox from "./components/Searchbox";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      //assigning the array
      gotcaste: gotcaste,
      searchfield: ""
    };
  }

  //searchfield is assigned the input value
  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  //FILTERING THE ARRAY ACCORDING TO THE SEARCHFIELD
  render() {
    const { gotcaste, searchfield } = this.state;
    //filtering and showing only those books whose name matches the input value
    const filteredChars = gotcaste.filter(char => {
      return char.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">GOT FLASH CARDS</h1>
        {/*Passing props*/}
        <Searchbox searchChange={this.onSearchChange} />
        <CardList arr={filteredChars} />
      </div>
    );
  }
}
