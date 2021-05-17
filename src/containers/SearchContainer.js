import React, { Component } from "react";
import { SearchView } from "../views";
import { setUser, getUser } from "../containers/user"

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

  handleVisibilityChange = (e, visibility) => {
    this.setState({
      profile_tab_visibility: visibility,
    });
  }

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
    const user = getUser();

    if(user === "") {
      window.open("/signup", "_self");
    }
    else {
      window.open("/purchases", "_self");
    }
  };

  handleButton2 = (e) => {
    //e.preventdefault();

    const user = getUser();

    if(user === "") {
      window.open("/login", "_self");
    }
    else {
      setUser("");
      window.open("/", "_self");
    }
  };

  handleBuy = (e, train_id) => {
    e.preventdefault();
    
  };

  render() {
    return (
      <>
        <SearchView
          handleInputChange={this.handleInputChange}
          handleVisibilityChange={this.handleVisibilityChange}
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
