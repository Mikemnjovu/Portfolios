import React, { useState, useEffect } from "react";
import Api from "../../Api";

const Card = () => {
  const [person, setPerson] = useState("");
  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const items = data;
    setPerson(items);
  }, []);
  const photoList = {
    unsplash: "https://source.unsplash.com/daily",
    picsum: "https:/picsum.photos/200/200",
  };
  console.log(person);
  return (
    <div className="card-columns ">
      {person
        ? person.map((item) => (
            <div className="shadow ">
              <div
                className="card text-dark bg-light margin-center"
                key={item.id}
              >
                <div className="card-header">
                  <p>
                    <b>{item.username}</b>
                  </p>
                </div>
                <img className="card-img mh-25" src={photoList.unsplash} />

                <div className="card-body text-center ">
                  <div className=" text-dark ">
                    <p className="card-text">
                      <b>Name:</b> {item.name}
                    </p>
                    <p>
                      <b>Email:</b> {item.email}
                    </p>
                    <p>
                      <b>Phone:</b> {item.phone}
                    </p>
                    <p>
                      <b>Website:</b> {item.website}
                    </p>
                    <p>
                      <b>Phone:</b> {item.phone}
                    </p>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <button type="button" className="btn btn-primary btn-lg">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          ))
        : "Please wait.."}
    </div>
  );
};

export default Card;
