import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from "react-router-dom";

import Signup from "../../Singup/Signup.js";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
        <div className="container-fluid ">
          <div className="mr-auto">
            <a href="#" className="navbar-brand">
              Portfolios
            </a>
          </div>
          <div className="d-flex justify-content-around">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            {/* List tags */}
            <div
              className="collapse navbar-collapse lm-auto "
              id="navbarResponsive"
            >
              <Router>
                <ul className="navbar-nav d-flex ">
                  <li className="nav-item mr-auto">
                    <div className="input-group mb-3">
                      <input
                        className="form-control py-2"
                        value="search"
                        type="search"
                        id="example-search-input"
                        placeholder="Enter Keywords"
                      />
                      <span className="input-group-append">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                        >
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link active" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link" to="/">
                      Descover
                    </NavLink>
                  </li>

                  <li className="nav-item ">
                    <Link to="/signup">
                      <button
                        className="nav-link btn btn-primary btn-md<"
                        type="button"
                      >
                        Sign up
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item margin-left-sm">
                    <Link to="/signin">
                      <button
                        className="nav-link btn btn-outline-light btn btn-outline-info btn-md"
                        type="button"
                      >
                        Sign in
                      </button>
                    </Link>
                  </li>
                </ul>
                <Switch>
                  <Route path="/signup">
                    <Signup />
                  </Route>
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
