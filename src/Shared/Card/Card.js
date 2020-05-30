import React, { useState, useEffect } from "react";
import Api from "../../Api";

const Card = () => {
  const [person, setPerson] = useState("");
  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const [item] = data;
    setPerson(item);
  }, []);
  const {
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
  } = person;
  console.log(address);
  return (
    <div className="card-deck margin-center">
      <div className="card bg-light ">
        <div className="card-header">
          <p>
            <b>{username}</b>
          </p>
        </div>
        <div className="card-body mx-auto">
          <img
            className="card-img-top img-thumbnail image mx-auto rounded-circle"
            src="https://source.unsplash.com/random"
          />
          <p>
            <b>Name:</b> {name}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>
          <p>
            <b>Phone:</b> {phone}
          </p>
          <p>
            <b>Website:</b> {website}
          </p>
          <p>
            <b>Phone:</b> {phone}
          </p>
        </div>
        <div className="card-footer text-center">
          <button type="button" className="btn btn-primary">
            View Portfolio
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <p>Name</p>
        </div>
        <div className="card-body">
          <p>Name</p>
        </div>
        <div className="card-footer">
          <p>Name</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
