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
          <a href="#bio">About Me</a>
        </li>
        <li>
          <Link to="work">Work</Link>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
