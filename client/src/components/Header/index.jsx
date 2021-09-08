import { NavLink, Link } from "react-router-dom";
import Header from "./styles";

const PageHeader = () => {
  return (
    <Header className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="" alt="Logo" loading="lazy" decoding="async" />
          </Link>

          <span
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="mainNavbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div id="mainNavbar" className="navbar-menu">
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/">
              Home
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary" to="/login">Login</Link>
                <Link className="button is-info is-light" to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Header>
  );
};

export default PageHeader;
