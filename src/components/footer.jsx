import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* info section */}
      <section className="info_section layout_padding2-top">
        <div className="container">
          {/* <div className="info_form">
            <h4>Our Newsletter</h4>
            <form action>
              <input type="text" placeholder="Enter your email" />
              <div className="d-flex justify-content-end">
                <button>subscribe</button>
              </div>
            </form>
          </div> */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h6>About Us</h6>
              <p>
                Welcome to our online fuel delivery platform! <br />
                Our mission is to provide high-quality fuel delivery services to our customers while promoting sustainability and reducing our environmental impact.
              </p>
            </div>
            <div className="col-md-2 offset-md-1">
              <h6>Menus</h6>
              <ul>
                <li className=" active">
                  <Link className to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className>
                  <Link className to="/about">
                    About{" "}
                  </Link>
                </li>
                <li className>
                  <Link className to="/services">
                    Services{" "}
                  </Link>
                </li>
                <li className>
                  <Link className to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li className>
                  <Link className to="#">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>Support</h6>
              <ul>
                <li>
                  <a href>Terms & Conditions</a>
                </li>
                <li>
                  <a href>Privacy Policy</a>
                </li>
                <li>
                  <a href>FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>Contact Us</h6>
              <div className="info_link-box">
                <a href="http://maps.google.com/?q=Bahawalpur">
                  <img src="images/location-white.png" alt="" />
                  <span>Location</span>
                </a>
                <a href="tel: +923499493369">
                  <img src="images/call-white.png" alt="" />
                  <span>+923499493369</span>
                </a> 
                <a href="mailto: hamoodkhan@gmail.com">
                  <img src="images/mail-white.png" alt="" />
                  <span>hamoodkhan2002@gmail.com</span>
                </a>
              </div>
              <div className="info_social">
                <div>
                  <a href>
                    <img src="images/facebook-logo-button.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href>
                    <img src="images/twitter-logo-button.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href>
                    <img src="images/linkedin.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href>
                    <img src="images/instagram.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end info section */}
      {/* footer section */}
      <section className="container-fluid footer_section ">
        <p>
          © 2023 Fuel Delivery Management System
        </p>
      </section>
      {/* footer section */}
    </>
  );
}

export default Footer;
