import restaurantList  from "./constants";
import Card from "./Card";
import "../App.css"
import { useState } from "react";

function filterData(searchText, restaurants) {
  //console.log(restaurants)
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            //console.log(data);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="card-list">
        {restaurants.map((restaurant) => {
          return (
            <Card key={restaurant.data.id} resti={restaurant.data.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;