import React from "react";
import "./styles/SearchView.css";

/*
{props.trains.map((train, i) => (

))}
*/

const SearchView = (props) => {
  return (
    <>
      <div class="background">
        <img class="backgroundImage" src="train-background.svg"></img>
        <div class="header">
          <div>
            <input
              value={props.departure}
              placeholder="Departure"
              name="departure"
              onChange={(e) => props.handleInputChange(e)}
            ></input>
          </div>
          <div>
            <input
              value={props.arrival}
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
        </div>

        <div class="bodyContainer">
          <div class="results">
            <div class="resultCell">
              <p class="trainName">Train 5</p>
              <div class="trainInfo">
                <p class="dep-arr">New York - New Jersey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchView;
