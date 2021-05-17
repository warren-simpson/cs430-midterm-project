import React from "react";
import "./styles/SearchView.css";



const SearchView = (props) => {
  /*
  var DynamiacComponent;
  if() {

  }
  else {

  }
  */


  return (
    <>
      <div class="background">
        <img class="backgroundImage" src="train-background.svg" alt=""></img>

        <div class="header">

          <div>
            <input
              value={props.state.departure}
              placeholder="Departure"
              name="departure"
              onChange={(e) => props.handleInputChange(e)}
            ></input>
          </div>

          <div>
            <input
              value={props.state.arrival}
              placeholder="Arrival"
              name="arrival"
              onChange={(e) => props.handleInputChange(e)}
            ></input>
          </div>

          <div>
            <button class="searchButton" onClick={(e) => props.handleSearch(e)}>
              Search
            </button>
          </div>

          <div class="profile">
            <img src="user.png" alt=""></img>
          </div>

        </div>

        <div class="section1">
          <div class="section2">
            <div>
              <button class="signup" onClick={(e) => props.handleButton1(e)}>Sign up</button>
            </div>

            <div>
              <button class="login" onClick={(e) => props.handleButton2(e)}>Login</button>
            </div>
          </div>
        </div>

        <div class="bodyContainer">
          <div class="results2">
            {props.state.trains.map((train) => (
              <div class="resultCell">
              <p class="trainName">Train {train.train_id}</p>
              <div class="trainInfo">
                <p class="dep-arr">{train.departure_city} - {train.arrival_city}</p>
                <p class="capacity">{train.capacity} Seats</p>
                <p class="date">{train.trip_date.substring(0, 10)}</p>
                <button class="buy">Buy</button>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchView;
