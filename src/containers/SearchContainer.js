import React, { Component } from "react";
import { SearchView } from "../views";
import { setUser, getUser } from "../containers/user";
import { db } from "../firebase/firebase";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: "",
      arrival: "",
      trains: [],
      searchedTrains: [],
    };
  }

  async componentDidMount() {
    const response = db.collection("trains");
    const data = await response.get();
    data.docs.forEach((item) => {
      // console.log("is this gonna work", item.data());
      this.setState({ trains: [...this.state.trains, item.data()] });
    });
  }

  getResponse = (departure, arrival) => {
    let searched = this.state.trains.filter(
      (train) =>
        train.departure_city === departure && train.arrival_city === arrival
    );

    this.setState({
      searchedTrains: searched,
    });
  };

  handleVisibilityChange = (e, visibility) => {
    this.setState({
      profile_tab_visibility: visibility,
    });
  };

  handleInputChange = (e) => {
    //e.preventdefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSearch = (e) => {
    //e.preventdefault();
    this.getResponse(this.state.departure, this.state.arrival);
    console.log(this.state.searchedTrains);
  };

  handleButton1 = (e) => {
    //e.preventdefault();
    const user = getUser();

    if (user === "") {
      window.open("/signup", "_self");
    } else {
      window.open("/purchases", "_self");
    }
  };

  handleButton2 = (e) => {
    //e.preventdefault();

    const user = getUser();

    if (user === "") {
      window.open("/login", "_self");
    } else {
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
