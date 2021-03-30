import { model } from "../server/dbconfig";
import { Trains } from "../server/models/trains.model";

// find all trains with the destination specified
async function SearchTrains(arrival_city, departure_city) {
  const result = await Trains.findAll({
    subQuery: false,
    where: {
      arrival_city: arrival_city,
      departure_city: departure_city,
    },
    offset: 0,
    limit: 6,
  });
}

export default SearchTrains;
