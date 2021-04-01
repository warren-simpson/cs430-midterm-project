import React, { Component } from "react";
import { SearchView } from "../views";

//const getTrains = require("../queries/getTrains");

class SearchContainer extends Component {
  state = {
    renderedResponse: "",
  };

  getResponse = async (departure, arrival) => {
    //const response = await fetch("/api/trains/", departure, "/", arrival);
    const response = await fetch(`/api/trains/${departure}/${arrival}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  componentDidMount() {
    this.getResponse("Texas", "Chicago").then((res) => {
      console.log("res: ", res);
      const someData = res;
      this.setState({ renderedResponse: someData });
    });
  }

  render() {
    return (
      <>
        <p>{this.state.renderedResponse.express}</p>
        <SearchView />
      </>
    );
  }
}

export default SearchContainer;
