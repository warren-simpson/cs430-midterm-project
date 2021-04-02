import React, { Component } from "react";
import { SearchView } from "../views";
const pool = require("../config/dbconfig");

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: "",
      arrival: "",
      trains: [],
    };
  }

  componentDidMount() {
    /*
    this.getResponse("Texas", "Chicago").then((res) => {
      const someData = res;
      this.setState({ trains: someData });
    });
    */
    let depCity = "Texas";
    let arrivalCity = "Chicago";
    pool.query(
      "select * from trains WHERE departure_city = ? && arrival_city = ?",
      [depCity, arrivalCity],
      (err, result, field) => {
        if (err) {
          return console.log(err);
        }
        res.send(result);
      }
    );
  }

  getResponse = async (departure, arrival) => {
    const response = await fetch(`/api/trains/${departure}/${arrival}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleInputChange = (e) => {
    e.preventdefault();
    this.setState({ 
      [e.target.name]: e.target.value,
    });
  }

  handleSearch = (e) => {
    e.preventdefault();
    this.getResponse(this.state.departure, this.state.arrival).then((res) => {
      const someData = res;
      this.setState({ 
        trains: someData 
      });
    });
  }

  render() {
    return (
      <>
        <SearchView 
        handleInputChange={this.handleInputChange}
        handleSearch={this.handleSearch}
        departure={this.state.departure}
        arrival={this.state.arrival}
        trains={this.state.trains}
        />
      </>
    );
  }
}

export default SearchContainer;
