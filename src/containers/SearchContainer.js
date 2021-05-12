import React, { Component } from "react";
import { SearchView } from "../views";
import { db } from "../firebase/firebase";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: "",
      arrival: "",
      trains: [],
    };
  }

  // REGISTERING A NEW USER

  // componentDidMount() {
  //   const data = {
  //     uid: new Date().getTime(),
  //     creditCard: this.state.creditCard,
  //     cvc: this.state.cvc,
  //   };
  //   db.collection("users")
  //     .doc(data.uid.toString())
  //     .set(data)
  //     .then(() => {
  //       console.log("A new user has been added", "Success");
  //     })
  //     .catch((error) => {
  //       console.log(error.message, "Create user failed");
  //       //this.setState({ isSubmitting: false });
  //     });
  // }

  // SEARCHING FOR SPECIFIC TRAIN
  getResponse = async (departure, arrival) => {
    const snapshot = await db
      .collection("trains")
      .where(
        "departure_city",
        "==",
        departure,
        "AND",
        "arrival_city",
        "==",
        arrival
      )
      .get();

    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
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
  };

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
