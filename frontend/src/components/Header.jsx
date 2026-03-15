import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/home?keyword=${keyword}`);
    } else {
      navigate("/home");
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{ paddingLeft: "100px", paddingRight: "100px" }}>
        <Navbar.Brand
          role="button"
          onClick={() => navigate("/")}
          style={{ width: "200px" }}
        >
          Digital
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="search-form" onSubmit={submitHandler}>
            <div className="search-box">
              <Form.Control
                type="search"
                placeholder="Nhập nội dung cần tìm..."
                className="search-input"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button type="submit" className="search-btn">
                🔍
              </button>
            </div>
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
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
              Giỏ Hàng
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
