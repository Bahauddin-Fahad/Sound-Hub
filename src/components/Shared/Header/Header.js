import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../../CustomLink/CustomLink";
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    toast.info("You Have Been Signed Out Succesfully", { theme: "colored" });
  };
  return (
    <header className="sticky top-0 z-50 ">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h2>Sound Hub</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="flex-grow-0" id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <CustomLink as={Link} to="/home">
                Home
              </CustomLink>

              <CustomLink as={Link} to="/blogs">
                Blogs
              </CustomLink>
              {user && (
                <>
                  <CustomLink as={Link} to="/manageItems">
                    Manage Items
                  </CustomLink>

                  <CustomLink as={Link} to="/addItems">
                    Add Items
                  </CustomLink>

                  <CustomLink as={Link} to="/myItems">
                    My Items
                  </CustomLink>
                </>
              )}
              {user ? (
                <CustomLink className="" onClick={handleSignOut} to="login">
                  Sign Out
                </CustomLink>
              ) : (
                <CustomLink as={Link} to="login">
                  Log In
                </CustomLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </header>
  );
};

export default Header;
