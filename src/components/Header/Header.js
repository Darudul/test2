import React from "react";
import Navbar from "../Navbar/Navbar";
import NavbarReact from "../NavbarReact/NavbarReact";
import NavContainer from "../NavContainer/NavContainer";

const Header = () => {
  return (
    <div>
      <NavContainer></NavContainer>
      <Navbar></Navbar>

      <h2 className="text-3xl">this is awesome header</h2>
    </div>
  );
};

export default Header;
