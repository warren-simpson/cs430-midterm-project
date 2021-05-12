import React, { Component } from "react";
import { SearchView } from "../views";
import { auth, db } from "../firebase/firebase";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: "",
      arrival: "",
      trains: [],
    };
  }

  // componentDidMount() {
  //   db.collection("trains")
  //     .get()
  //     .then((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => doc.data());
  //       console.log(data);
  //       this.setState({ trains: data });
  //     });
  // }

  getResponse = async (departure, arrival) => {
    // const response = await fetch(`/api/trains/${departure}/${arrival}`);
    // const body = await response.json();
    // this.setState({ trains: body });
    // console.log("my beatiful trains from the databse: ", this.state.trains);
    // if (response.status !== 200) throw Error(body.message);
    // return body;

    var query = db.collection("trains");
    let data;
    query = query.where("departure_city", "==", departure);
    query = query.where("arrival_city", "==", arrival);

    query.get().then((querySnapshot) => {
      data = querySnapshot.docs.map((doc) => doc.data());
      console.log(data);
      this.setState({ trains: data });
      console.log("trains from state: ", this.state.trains);
    });
    return data;
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
