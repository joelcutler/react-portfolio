import React from "react";
import { Link } from "react-router-dom";

// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  //   const {
  //     categories = [],
  //     setCurrentCategory,
  //     currentCategory,
  //     contactSelected,
  //     setContactSelected,
  //   } = props;

  //   const handleClick = (item) => {
  //     console.log(item);
  //     return item;
  //   };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
