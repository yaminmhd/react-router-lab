import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => (
  <div className="App">
    <ul>
      <Link className="list" to="/">
        Home Page
      </Link>
      <Link className="list" to="/tacos">
        Tacos Feed
      </Link>
      <Link className="list" to="/twitter">
        Twitter Feed
      </Link>
    </ul>
  </div>
);

export default NavLinks;
