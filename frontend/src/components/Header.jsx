import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
<<<<<<< HEAD

=======
>>>>>>> parent of d0c9677 (feat: frontend)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{ paddingLeft: "100px", paddingRight: "100px" }}>
        <Navbar.Brand href="#" style={{ width: "200px" }}>
          Digital
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="search-form">
            <div className="search-box">
              <Form.Control
                type="search"
                placeholder="Nhập nội dung cần tìm..."
                className="search-input"
              />
              <button className="search-btn">🔍</button>
            </div>
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button
              variant="outline-primary"
              className="me-2"
              onClick={() => navigate("/login")}
            >
              <i className="bi bi-person-circle me-2"></i>
              Đăng nhập
            </Button>
            <Button
              variant="outline-primary"
              className="me-2"
              onClick={() => navigate("/cart")}
            >
              Giỏ Hàng
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
