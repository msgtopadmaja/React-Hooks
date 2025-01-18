import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state variable - super powerful variable
  // React Hook is a normal javascript function.That function utility function which is given by react for us or it will return the powerful logic to us

  // second paramater as function
  const [listOfRestaurants, setListOfRestaruants] = useState(resList);

  //array destruction
  //const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestaruants] = arr;
  // const listOfRestaurants = arr[0];
  // const setListOfRestaruants = arr[1];

  //Normal js variable
  let listOfRestaurantsJs = [
    {
      card: {
        card: {
          info: {
            id: "61134",
            name: "KFC",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/6/fdb0f34e-95b6-48a5-ba31-b6b255e49e6d_1004016.JPG",
            locality: "Electronic City",
            areaName: "BTM Layout",
            costForTwoString: 35000,
            cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
            avgRating: 3,
            veg: false,
            deliveryTime: 25,
            slaString: "25-30 mins",
          },
        },
      },
    },
    {
      card: {
        card: {
          info: {
            id: "72841",
            name: "Pizza Paradise",
            cloudinaryImageId: "2a8ea479040d62f82871e1be7470672a",
            locality: "Indiranagar",
            areaName: "Indiranagar",
            costForTwoString: 50000,
            cuisines: ["Italian", "Pizzas", "Pastas"],
            avgRating: 4.4,
            veg: false,
            deliveryTime: 40,
            slaString: "40-45 mins",
          },
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // setListOfRestaruants();
            const filterdList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListOfRestaruants(filterdList);
            console.log(listOfRestaurants);
            console.log(setListOfRestaruants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {listOfRestaurants.map((restraunt) => (
          <RestaurantCard
            resData={restraunt}
            key={restraunt.card.card.info.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
