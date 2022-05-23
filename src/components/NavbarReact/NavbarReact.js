import React from "react";

const NavbarReact = (props) => {
  const { name, link } = props.route;
  return (
    <ul>
      <li>
        <a href="">{name}</a>
      </li>
    </ul>
  );
};

export default NavbarReact;
