import { CDN_URL } from "../utils/constants";

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
  // console.log(props.resName);
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
        src={CDN_URL + cloudinaryImageId}
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

export default RestaurantCard;
