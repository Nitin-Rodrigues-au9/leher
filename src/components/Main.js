import React from "react";
import Categories from "./Categories";
import { Switch, Route, Link } from "react-router-dom";
import PlaylistPage from "./pages/Playlist";

import "../App.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">
        <div>Explore The Music </div>
        <div className=" nav1 spotify-logo--text">
          <Link className=" nav2">Signup/Login </Link>
        </div>
      </div>

      <div className="mainContent">
        <Switch>
          <Route path="/" exact component={Categories}></Route>
          <Route path="/search">Search</Route>
          <Route path="/your-library">Your library</Route>
          <Route path="/playlist/:id" component={PlaylistPage}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
