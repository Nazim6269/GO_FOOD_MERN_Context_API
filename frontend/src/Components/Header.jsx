import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { deleteCookie } from "../../helpers/cookie";
import Modal from "../Modal";
import { useCart } from "../context/context";
import Cart from "./Cart";

const Header = () => {
  const [cartView, setCartView] = useState(false);
  const { cart } = useCart();

  //handle logout function
  const handleLogout = () => {
    deleteCookie("myCookie");
    window.location.href = "http://localhost:5173/login";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-info">
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
            {document.cookie.includes("myCookie=") ? (
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
            {!document.cookie.includes("myCookie=") ? (
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
                  <Badge pill bg="danger ">
                    {cart.length ? cart.length : ""}
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
