import React from "react";
import Api from "../../Api";

const Card = (userApi) => {
  console.log(userApi);
  return (
    <div>
      <div className="card">
        <p>{userApi.firstName}</p>
      </div>
    </div>
  );
};

export default Card;
