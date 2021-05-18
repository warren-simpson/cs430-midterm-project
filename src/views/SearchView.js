import React from "react";
import "./styles/SearchView.css";

const SearchView = (props) => {
  var button1Name = "SignUp";
  var button2Name = "Login";
  var user = sessionStorage.getItem('email');

  if (user !== null) {
    console.log(user);
    button1Name = "Purchases";
    button2Name = "Logout";
  }

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

          <div
            class="profile"
            onMouseEnter={(e) => props.handleVisibilityChange(e, "visible")}
            onMouseLeave={(e) => props.handleVisibilityChange(e, "hidden")}
          >
            <img src="user.png" alt=""></img>
          </div>
        </div>

        <div
          class="section1"
          onMouseEnter={(e) => props.handleVisibilityChange(e, "visible")}
          onMouseLeave={(e) => props.handleVisibilityChange(e, "hidden")}
          style={{ visibility: props.state.profile_tab_visibility }}
        >
          <div class="section2">
            <div>
              <button class="signup" onClick={(e) => props.handleButton1(e)}>
                {button1Name}
              </button>
            </div>

            <div>
              <button class="login" onClick={(e) => props.handleButton2(e)}>
                {button2Name}
              </button>
            </div>
          </div>
        </div>

        <div class="bodyContainer">
          <div class="results2">
            {props.state.searchedTrains.map((train) => (
              <div class="resultCell">
                <p class="trainName">Train {train.id}</p>
                <div class="trainInfo">
                  <p class="dep-arr">
                    {train.departure_city} - {train.arrival_city}
                  </p>
                  <p class="capacity">{train.capacity} Seats</p>
                  <p class="date">{train.trip_date.substring(0, 10)}</p>
                  <button
                    class="buy"
                    onClick={(e) => props.handleBuy(e, train.id)}
                  >
                    Buy
                  </button>
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
