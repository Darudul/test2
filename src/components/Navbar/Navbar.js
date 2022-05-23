import React from "react";
import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "describe", link: "/describe" },
    { id: 4, name: "contact", link: "/contact" },
    { id: 5, name: "priceee", link: "/priceee" },
  ];
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
