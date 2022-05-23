import { Container } from "postcss";
import React from "react";
import NavbarReact from "../NavbarReact/NavbarReact";

const NavContainer = () => {
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "describe", link: "/describe" },
    { id: 4, name: "contact", link: "/contact" },
    { id: 5, name: "priceee", link: "/priceee" },
  ];
  return (
    <div>
      <ul>
        {routes.map((route) => (
          <NavbarReact key={route.id} route={route}></NavbarReact>
        ))}
      </ul>
    </div>
  );
};

export default NavContainer;
