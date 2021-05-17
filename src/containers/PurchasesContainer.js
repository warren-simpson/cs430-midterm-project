import React, { Component } from "react";
import { PurchasesView } from "../views";

class PurchasesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        purchases: [{"train_id": "1", "departure_city": "New York", "arrival_city": "Boston", "capacity": "22", "trip_date": "2532-32-44"}],
    };
  }

  componentDidMount() {
      
  }

  handleInputChange = (e) => {
    //e.preventdefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCancel = (e, train_id) => {

  }

  render() {
    return (
      <>
        <PurchasesView
          handleInputChange={this.handleInputChange}
          handleCancel={this.handleCancel}
          state={this.state}
        />
      </>
    );
  }
}

export default PurchasesContainer;
