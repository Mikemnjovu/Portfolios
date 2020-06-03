import React from "react";
import "./Home.css";
import JambotronComp from "./jambotron";
import Card from "../Shared/Card/Card";
import Api from "../Api";
const Home = () => {
  return (
    <div>
      <div id="slides" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active"></li>
          <li data-target="#slides" data-slide-to="1" className=""></li>
          <li data-target="#slides" data-slide-to="2" className=""></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="img-fluid image-test"
              src="https://images.pexels.com/photos/3817723/pexels-photo-3817723.jpeg?cs=srgb&dl=man-in-black-crew-neck-shirt-wearing-black-sunglasses-and-3817723.jpg&fm=jpg"
              alt="first pic"
            />
            <div className="carousel-caption text-center">
              <p className="mb-0 display-4">Portifolios</p>
              <h2>A site to show case your work..</h2>
              <button className="btn btn-primary btn-lg">Sign up Now</button>
            </div>
          </div>
          <div className="carousel-item align-items-center justify-content-center">
            <img
              className="img-fluid image-test"
              src="https://images.pexels.com/photos/1820935/pexels-photo-1820935.jpeg?cs=srgb&dl=photo-of-woman-wearing-headscarf-1820935.jpg&fm=jpg"
              alt="first pic"
            />
            <div className="carousel-caption">
              <h2 className="display-1">Who you are..</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid image-test"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=women-s-white-and-black-button-up-collared-shirt-774909.jpg&fm=jpg"
              alt="first pic"
            />
            <div className="carousel-caption">
              <h1 className="display-1">what you can be..</h1>
            </div>
          </div>
        </div>
      </div>
      <JambotronComp />
      <Card />
    </div>
  );
};

export default Home;
