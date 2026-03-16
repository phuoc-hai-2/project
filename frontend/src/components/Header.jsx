<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> parent of d0c9677 (feat: frontend)
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
<<<<<<< HEAD

function Header() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

=======
import InputGroup from "react-bootstrap/InputGroup";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  const navigate = useNavigate();
>>>>>>> parent of d0c9677 (feat: frontend)
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{ paddingLeft: "100px", paddingRight: "100px" }}>
<<<<<<< HEAD
        <Navbar.Brand
          role="button"
          onClick={() => navigate("/")}
          style={{ width: "200px" }}
        >
=======
        <Navbar.Brand href="#" style={{ width: "200px" }}>
>>>>>>> parent of d0c9677 (feat: frontend)
          Digital
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
<<<<<<< HEAD
          <Form className="search-form" onSubmit={submitHandler}>
=======
          <Form className="search-form">
>>>>>>> parent of d0c9677 (feat: frontend)
            <div className="search-box">
              <Form.Control
                type="search"
                placeholder="Nhập nội dung cần tìm..."
                className="search-input"
<<<<<<< HEAD
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button type="submit" className="search-btn">
                🔍
              </button>
=======
              />
              <button className="search-btn">🔍</button>
>>>>>>> parent of d0c9677 (feat: frontend)
            </div>
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
<<<<<<< HEAD
            {userInfo ? (
              <>
                <span className="navbar-text me-3 fw-bold text-primary">
                  Chào, {userInfo.name}
                </span>
                {userInfo.role === "admin" && (
                  <Button
                    variant="outline-dark"
                    className="me-2"
                    onClick={() => navigate("/admin/product/add")}
                  >
                    Thêm Sản Phẩm
                  </Button>
                )}
                <Button
                  variant="outline-danger"
                  className="me-2"
                  onClick={logout}
                >
                  Đăng xuất
                </Button>
              </>
            ) : (
              <Button
                variant="outline-primary"
                className="me-2"
                onClick={() => navigate("/login")}
              >
                Đăng nhập
              </Button>
            )}
            <Button variant="outline-success" onClick={() => navigate("/cart")}>
=======
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
>>>>>>> parent of d0c9677 (feat: frontend)
              Giỏ Hàng
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
