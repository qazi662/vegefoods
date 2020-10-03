import React from "react";
import { FaShoppingCart, FaBars, FaUser, FaUserSlash } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import CartContext from "../context/cart";
import LoginModal from "./LoginModal";

import UserContext from "../context/user";

const NavBar = () => {
  const { user, userLogout } = React.useContext(UserContext);

  const { cartItems } = React.useContext(CartContext);

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" expand="lg" className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Vegefoods
          </Link>
          <NavbarToggler
            onClick={toggle}
            color="primary"
            className="mr-2 nav-toggler"
          >
            <FaBars />
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link mr-4 mt-2" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link mr-4 mt-2" to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link mr-4 mt-2" to="/shop">
                  Shop
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link mr-4 mt-2" to="/contact">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link mr-4 mt-2" to="/wishlist">
                  Wishlist
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link mt-2" to="/cart">
                  <FaShoppingCart /> [{cartItems ? cartItems : 0}]
                </NavLink>
              </NavItem>
              <NavItem>
                {user.token ? (
                  <span className="nav-link nav-logout cursor-pointer">
                    <UncontrolledButtonDropdown>
                      <DropdownToggle caret className="bg-primary">
                        <FaUserSlash />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={userLogout}>Logout</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </span>
                ) : (
                  <span className="nav-link">
                    <UncontrolledButtonDropdown>
                      <DropdownToggle className="bg-primary">
                        <LoginModal
                          buttonClassName=""
                          buttonLabel={<FaUser />}
                        />
                      </DropdownToggle>
                      {/* <DropdownMenu>
                        <DropdownItem onClick={() => {}}>
                          Another Action
                        </DropdownItem>
                      </DropdownMenu> */}
                    </UncontrolledButtonDropdown>
                  </span>
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
