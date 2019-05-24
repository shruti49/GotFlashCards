import React, { Component } from "react";
import "./Searchbox.css";

export default class Searchbox extends Component {
  render() {
    return (
      <div>
        <input
          id="searchbox"
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="Search Characters.."
          onChange={this.props.searchChange}
        />
      </div>
    );
  }
}
