import React from "react";
import "./styles/PurchasesView.css";

const PurchasesView = (props) => {
  const email = sessionStorage.getItem("email");
  return (
    <>
      <div class="background2">
        <div class="results1">
          {props.state.purchases.map((train) =>
            train.email === email ? (
              <div class="resultCell">
                <p class="trainName">Train {train.id}</p>
                <div class="trainInfo">
                  <p class="dep-arr">
                    {train.departure_city} - {train.arrival_city}
                  </p>
                  <p class="capacity">{train.capacity} Seats</p>
                  <p class="date">{train.trip_date.substring(0, 10)}</p>
                  <button
                    class="cancel"
                    onClick={(e) => props.handleCancel(e, train.id)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default PurchasesView;
