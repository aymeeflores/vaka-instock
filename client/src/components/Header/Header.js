import "../Header/header.scss";
import "../../assets/Logo";

const Header = () => {
  return (
    <section className="header">
      <nav className="header__nav">
        <article className="header__logo-container">
          <img src="../../assets/Logo/InStock-Logo_1x.png" />
        </article>
      </nav>
    </section>
  );
};

export default Header;
