import { useLocation, Link } from "react-router-dom";
import SliderHome from "./slider-home";

function Header() {
  window.gLocation = useLocation();
  return (
    <div className={(window.gLocation.pathname !== '/') ? 'sub_page' : ''}>
      <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" to="index.html">
                <img src="images/logo.png" alt="" />
                <span>Energym</span>
              </Link>
              <div className="contact_nav" id>
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link className="nav-link" to="service.html">
                      <img src="images/location.png" alt="" />
                      <span>Location</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="service.html">
                      <img src="images/call.png" alt="" />
                      <span>Call : + 01 1234567890</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="service.html">
                      <img src="images/envelope.png" alt="" />
                      <span>demo@gmail.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section className=" slider_section position-relative">
          <div className="container">
            <div className="custom_nav2">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent">
                  <div className="d-flex  flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/home">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/about">
                          About <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/service">
                          Services{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Contact Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                          Login
                        </Link>
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                      <button
                        className="btn  my-2 my-sm-0 nav_search-btn"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <SliderHome display-if={window.gLocation.pathname === '/'} />
        </section>
        {/* end slider section */}
      </div>
    </div>
  );
}

export default Header;
