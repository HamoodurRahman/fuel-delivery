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
              <Link className="navbar-brand" to="/">
                <img src="images/logo.png" alt="" />
                <span>Wallet Fuel</span>
              </Link>
              <div className="contact_nav" id>
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a className="nav-link" href="http://maps.google.com/?q=Bahawalpur">
                      <img src="images/location.png" alt="" />
                      <span>Location</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="tel: +923499493369">
                      <img src="images/call.png" alt="" />
                      <span>Call : 0349 9493369</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="mailto: hamoodkhan@gmail.com">
                      <img src="images/envelope.png" alt="" />
                      <span>hamoodkhan@gmail.com</span>
                    </a>
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
                      <li className={(window.gLocation.pathname === '/') ? 'nav-item active' : 'nav-item'}>
                        <Link className="nav-link" to="/">
                          Home  <span diplay-if={window.gLocation.pathname === '/'} className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className={(window.gLocation.pathname === '/about') ? 'nav-item active' : 'nav-item'}>
                        <Link className="nav-link" to="/about">
                          About  <span diplay-if={window.gLocation.pathname === '/about'} className="sr-only">(current)</span>
                        </Link>
                      </li>
                      {/* <li className={(window.gLocation.pathname === '/service') ? 'nav-item active' : 'nav-item'}>
                        <Link className="nav-link" to="/service">
                          Services <span diplay-if={window.gLocation.pathname === '/service'} className="sr-only">(current)</span>
                        </Link>
                      </li> */}
                      <li className={(window.gLocation.pathname === '/contact') ? 'nav-item active' : 'nav-item'}>
                        <Link className="nav-link" to="/contact">
                          Contact Us <span diplay-if={window.gLocation.pathname === '/contact'} className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className={(window.gLocation.pathname === '/stations') ? 'nav-item active' : 'nav-item'}>
                        <Link className="nav-link" to="/stations">
                          Stations <span diplay-if={window.gLocation.pathname === '/stations'} className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className={(window.gLocation.pathname === '/stations') ? 'nav-item active' : 'nav-item'}>
                        <a className="nav-link" href="http://localhost/fueldelivery/admin/dashboard.php">
                          Dashboard <span diplay-if={window.gLocation.pathname === '/dashboard'} className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className={(window.gLocation.pathname === '/login') ? 'nav-item active' : 'nav-item'}>
                        <Link className="nav-link" to="/login">
                          Login <span diplay-if={window.gLocation.pathname === '/login'} className="sr-only">(current)</span>
                        </Link>
                      </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                      <button
                        className="btn  my-2 my-sm-0 nav_search-btn"
                        type="submit"
                      />
                    </form> */}
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
