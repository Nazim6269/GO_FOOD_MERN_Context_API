import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import Cart from "./Cart";
import { useCart } from "./ContextReducer";

const Header = () => {
  const data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const [cartView, setCartView] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid ">
        <a className="navbar-brand fs-2 fst-italic bold text-white" href="#">
          GoFood
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className="nav-link active text-white "
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            {localStorage.getItem("authToken") ? (
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  My Orders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          <div className="d-flex">
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link
                  className="btn bg-white text-success mx-1 px-2 py-1 nav-link"
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className=" btn bg-white text-success mx-1 px-2 py-1 nav-link"
                  to="/signup"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <Link
                  className="btn bg-white text-success mx-1 px-2 py-1 nav-link"
                  onClick={() => setCartView(true)}
                >
                  My Carts
                  <Badge pill bg="danger">
                    {data.length ? data.length : ""}
                  </Badge>
                </Link>
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                ) : null}
                <Link
                  className="btn bg-white text-success mx-1 px-2 py-1 nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
