import React from "react";
import "./styles/SearchView.css";

const SearchView = (props) => {
    return (
      <>
      <div class="background">
        <img class="backgroundImage" src="train-background.svg"></img>
        <div class="header">
          <div>
            <input placeholder="Departure"></input>
          </div>
          <div>
            <input  placeholder="Destination"></input>
          </div>
          <div>
            <button class="searchButton">Search</button>
          </div>
        </div>

        <div class="bodyContainer">
          <div class="results">

          </div>
        </div>

      </div>
      </>
    );
  };
  
export default SearchView;