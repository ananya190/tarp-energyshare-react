import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/account" activeStyle>
            Account
          </NavLink>
          <NavLink to="/buy" activeStyle>
            Buy
          </NavLink>
          <NavLink to="/sell" activeStyle>
            Sell
          </NavLink>
          <NavLink to="/transactions" activeStyle>
            Your Transactions
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
