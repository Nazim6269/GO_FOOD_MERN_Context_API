import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="d-flex  bg-info flex-wrap justify-content-center align-items-center py-3 mt-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></Link>
          <span className="mb-3 mb-md-0 text-muted text-center">
            © 2023 GoFood, NazimUddin
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"></ul>
      </footer>
    </div>
  );
};

export default Footer;
