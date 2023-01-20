import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Header/Header.css";
import Hero from "../Hero/Hero";

function Header() {
  return (
    <>
      <div className="Header-s">
        {[false].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="">
            <Container fluid>
              <Navbar.Brand href="#">Toko Online Hari</Navbar.Brand>
            </Container>
          </Navbar>
        ))}
        {/* <Hero /> */}
      </div>
    </>
  );
}

export default Header;
