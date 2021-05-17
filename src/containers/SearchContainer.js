import React, { Component } from "react";
import { SearchView } from "../views";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: "",
      arrival: "",
      trains: [{"train_id": "1", "departure_city": "New York", "arrival_city": "Boston", "capacity": "22", "trip_date": "2532-32-44"}],
      profile_tab_visibility: "hidden",
    };
  }

  getResponse = async (departure, arrival) => {
    const response = await fetch(`/api/trains/${departure}/${arrival}`);
    const body = await response.json();
    this.setState({ trains: body });
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleInputChange = (e) => {
    //e.preventdefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSearch = (e) => {
    //e.preventdefault();
    this.getResponse(this.state.departure, this.state.arrival).then((res) => {
      const someData = res;
      this.setState({
        trains: someData,
      });
    });
  };

  handleButton1 = (e) => {
    //e.preventdefault();
    window.open("/signup", "_self");
  };

  handleButton2 = (e) => {
    e.preventdefault();
    
  };

  handleBuy = (e) => {
    e.preventdefault();
    
  };

  render() {
    return (
      <>
        <SearchView
          handleInputChange={this.handleInputChange}
          handleButton1={this.handleButton1}
          handleButton2={this.handleButton2}
          handleBuy={this.handleBuy}
          handleSearch={this.handleSearch}
          state={this.state}
        />
      </>
    );
  }
}

export default SearchContainer;
