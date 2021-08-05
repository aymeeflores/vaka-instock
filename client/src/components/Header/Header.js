import "../Header/header.scss";
import logo from "../../assets/Logo/InStock-Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <nav className="header__nav">
        <img className="header__logo" src={logo} alt="InStock Logo" />
        <article className="header__links-container">
          {/* warehouse btn */}
          <Link to="/" className="header__btn-link">
            <article className="header__btn header__btn-warehouse">
              <p className="header__btn-text">Warehouses</p>
            </article>
          </Link>
          {/* inventory btn */}
          <Link to="/inventory" className="header__btn-link">
            <article className="header__btn">
              <p className="header__btn-text">Inventory</p>
            </article>
          </Link>
        </article>
      </nav>
    </section>
  );
};

export default Header;
