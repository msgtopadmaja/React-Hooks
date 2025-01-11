import React from "react";
import { createRoot } from "react-dom/client";

//React.createElement ==> object, when it is render in DOM it is HTML element

/*
Header
- logo
- menu item or nav item
Body
- Search
- RestaurantContainer
  - Restaurant card
    - Restaurant name
    - Rating
    - cuisine
    - delivery time
Footer
 - copyright
 - links
 - address
 - contact us
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const RestaurantCard = ({resName, cuisine}) => { Destructre
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    deliveryTime,
  } = resData?.card.card.info;
  console.log(props.resName);
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",   ")}</h4>
      <h4>{avgRating}</h4>
      {/* <h4>{resData[0].card.card.info.costForTwo / 100}</h4> */}
      <h4>{costForTwoString}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        info: {
          id: "61133",
          name: "Namma Madurai",
          cloudinaryImageId: "yfyo8aklppbwdplv7ofp",
          locality: "Silver Spring Layout",
          areaName: "Marathahalli",
          costForTwo: 40000,
          costForTwoString: "₹400 FOR TWO",
          cuisines: ["South Indian", "Fast Food"],
          avgRating: 4.5,
          veg: true,
          deliveryTime: 31,
          slaString: "30-35 mins",
        },
      },
    },
  },
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
          avgRating: 4.2,
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
  {
    card: {
      card: {
        info: {
          id: "82421",
          name: "Punjabi Dhaba Express",
          cloudinaryImageId: "39e0ac9e01e139dd8c50aa35fddead14",
          locality: "Whitefield",
          areaName: "Whitefield",
          costForTwoString: 35000,
          cuisines: ["North Indian", "Punjabi", "Tandoor"],
          avgRating: 4.1,
          veg: true,
          deliveryTime: 35,
          slaString: "35-40 mins",
        },
      },
    },
  },
  {
    card: {
      card: {
        info: {
          id: "93657",
          name: "Udupi Grand",
          cloudinaryImageId: "53cdeaa39bbdbd79a9f444f0fb7987f4",
          locality: "JP Nagar",
          areaName: "JP Nagar",
          costForTwoString: 25000,
          cuisines: ["South Indian", "Udupi", "Beverages"],
          avgRating: 4.6,
          veg: true,
          deliveryTime: 22,
          slaString: "22-27 mins",
        },
      },
    },
  },
  {
    card: {
      card: {
        info: {
          id: "61139",
          name: "Bowl Company",
          cloudinaryImageId: "bb6049fae59b8a2413a9177eb0338b49",
          locality: "JP Nagar",
          areaName: "JP Nagar",
          costForTwoString: 40000,
          cuisines: ["Continental", "American", "Pan Asian"],
          avgRating: 4.3,
          veg: false,
          deliveryTime: 27,
          slaString: "27-32 mins",
        },
      },
    },
  },
];

// not using keys (not acceptable) <<< index as key(index is better than not using without key) << unique id (id is best practice, prefer)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restraunt) => (
          <RestaurantCard
            resData={restraunt}
            key={restraunt.card.card.info.id}
          />
        ))}
        {/* <RestaurantCard
          resData={resList[0]}
          resName="Meghana Foods"
          cuisine="Biryani, South Indian, India"
        /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
