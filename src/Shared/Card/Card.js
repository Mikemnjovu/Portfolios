import React, { useState, useEffect } from "react";
import Api from "../../Api";

const Card = () => {
  const [person, setPerson] = useState("");
  const [persontest, setPresontest] = useState("");
  useEffect(async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    const items = data.results;
    setPerson(items);
  }, []);

  const photoList = {
    unsplash: "https://source.unsplash.com/daily",
    picsum: "https:/picsum.photos/200/200",
  };
  return (
    <div className="card-columns ">
      {person
        ? person.map((item) => (
            <div className=" ">
              <div
                className="card text-dark bg-light mx-auto shadow"
                key={item.id}
              >
                <div className="card-header">
                  <p>
                    <b>{item.login.username}</b>
                  </p>
                </div>
                <img className="card-img mh-25" src={item.picture.large} />

                <div className="card-body text-center ">
                  <div className=" text-dark ">
                    <p className="card-text">
                      <b>Name:</b> {`${item.name.first} ${item.name.last}`}
                    </p>
                    <p>
                      <b>Email:</b> {item.email}
                    </p>
                    <p>
                      <b>Phone:</b> {item.phone}
                    </p>
                    <p>
                      <b>Website:</b> {item.email}
                    </p>
                    <p>
                      <b>Job title:</b> {"Software Enginer"}
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
