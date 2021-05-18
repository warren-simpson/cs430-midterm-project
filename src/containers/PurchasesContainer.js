import React, { Component } from "react";
import { PurchasesView } from "../views";
import { db } from "../firebase/firebase";
import { setUser, getUser } from "../containers/user";

class PurchasesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchases: [],
      userPurchases: [],
    };
  }

  async componentDidMount() {
    const response = db.collection("purchases");
    const data = await response.get();
    data.docs.forEach((item) => {
      // console.log("is this gonna work", item.data());
      this.setState({ purchases: [...this.state.purchases, item.data()] });
    });
  }

  handleInputChange = (e) => {
    //e.preventdefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCancel = (e, train_id) => {};

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
