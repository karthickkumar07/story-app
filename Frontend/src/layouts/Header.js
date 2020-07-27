import React, { useContext, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarText, NavItem } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UseContext";
const Header = ({ setReload = (f) => f, reload = undefined }) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Navbar color="secondary" className="Nav" light style={{ opacity: "0.8" }}>
      <NavbarBrand className="text-white">
        Welcome to kavidhai Library
      </NavbarBrand>
      <NavbarBrand className="text-white font-weight-bold text-center ml-auto">
        SPARTAN KAVIDHAI APP
        <img
          src="https://cdn.pixabay.com/photo/2013/06/07/09/53/notepad-117597__340.png"
          width="30"
          height="30"
          alt=""
        />
      </NavbarBrand>

      <NavbarText className="ml-auto text-dark btn btn-light">
        <NavLink tag={Link} to="/yourkavidhai" className="text-dark">
          Your Kavidhai
        </NavLink>
      </NavbarText>
      <NavbarText className="text-secondary ">a</NavbarText>

      <NavbarText>
        <img
          className="rounded-circle mr-auto"
          src={user.image}
          width="30"
          height="30"
        />
        <NavbarText className="text-white ">{user.displayName}</NavbarText>
        <NavbarText className="text-secondary ">a</NavbarText>
      </NavbarText>
      <NavbarText>
        <NavLink tag={Link} to="/" className="text-white btn btn-danger pr-2">
          Logout
        </NavLink>
      </NavbarText>
    </Navbar>
  );
};

export default Header;
