import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import AdminProductAdd from "./pages/AdminProductAdd";
import AdminProductEdit from "./pages/AdminProductEdit";
import AdminRoute from "./components/AdminRoute";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            <Route element={<AdminRoute />}>
              <Route path="/admin/product/add" element={<AdminProductAdd />} />
              <Route
                path="/admin/product/edit/:id"
                element={<AdminProductEdit />}
              />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
