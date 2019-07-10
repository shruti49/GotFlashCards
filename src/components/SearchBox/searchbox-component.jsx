import React, { Component } from "react";

export default class Searchbox extends Component {
  render() {
    return (
      <div>
        <input
          className="pa3 ba b--green bg-lightest-blue search-input"
          type="search"
          placeholder="Search Characters.."
          onChange={this.props.searchChange}
          style={{ borderRadius: "5px", width: "250px" }}
        />
      </div>
    );
  }
}
