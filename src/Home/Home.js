import React from "react";
import "./Home.css";
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
              className="img-fluid "
              src="https://images.pexels.com/photos/1181623/pexels-photo-1181623.jpeg?cs=srgb&dl=woman-wearing-beaded-white-necklace-1181623.jpg&fm=jpg"
            />
            <div className="carousel-caption">
              <h1 className="display-2">Portifolios</h1>
              <h2>A site to show case your work!</h2>
              <button className="btn btn-primary btn-lg">Sign up Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid"
              src="https://images.pexels.com/photos/1820935/pexels-photo-1820935.jpeg?cs=srgb&dl=photo-of-woman-wearing-headscarf-1820935.jpg&fm=jpg"
            />
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=women-s-white-and-black-button-up-collared-shirt-774909.jpg&fm=jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
