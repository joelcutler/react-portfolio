import React from "react";
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
          <a href="#work">Work</a>
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
