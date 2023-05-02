function Home() {
  return (
    <>
      {/* about section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>About Energym</h2>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/about-img.png" alt />
            </div>
            <div className="detail-box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </p>
              <a href>Read More</a>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
      {/* service section */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Services</h2>
          </div>
          <div className="service_container">
            <div className="box">
              <img src="images/s-1.jpg" alt />
              <h6 className="visible_heading">CROSSFIT TRAINING</h6>
              <div className="link_box">
                <a href>
                  <img src="images/link.png" alt />
                </a>
                <h6>CROSSFIT TRAINING</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/s-2.jpg" alt />
              <h6 className="visible_heading">FITNESS</h6>
              <div className="link_box">
                <a href>
                  <img src="images/link.png" alt />
                </a>
                <h6>FITNESS</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/s-3.jpg" alt />
              <h6 className="visible_heading">DYNAMIC STRENGTH TRAINING</h6>
              <div className="link_box">
                <a href>
                  <img src="images/link.png" alt />
                </a>
                <h6>DYNAMIC STRENGTH TRAINING</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/s-4.jpg" alt />
              <h6 className="visible_heading">HEALTH</h6>
              <div className="link_box">
                <a href>
                  <img src="images/link.png" alt />
                </a>
                <h6>HEALTH</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/s-5.jpg" alt />
              <h6 className="visible_heading">WORKOUT</h6>
              <div className="link_box">
                <a href>
                  <img src="images/link.png" alt />
                </a>
                <h6>WORKOUT</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/s-6.jpg" alt />
              <h6 className="visible_heading">STRATEGIES</h6>
              <div className="link_box">
                <a href>
                  <img src="images/link.png" alt />
                </a>
                <h6>STRATEGIES</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end service section */}
      {/* Us section */}
      <section className="us_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Why Choose Us</h2>
          </div>
          <div className="us_container">
            <div className="box">
              <div className="img-box">
                <img src="images/u-1.png" alt />
              </div>
              <div className="detail-box">
                <h5>QUALITY EQUIPMENT</h5>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/u-2.png" alt />
              </div>
              <div className="detail-box">
                <h5>HEALTHY NUTRITION PLAN</h5>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/u-3.png" alt />
              </div>
              <div className="detail-box">
                <h5>SHOWER SERVICE</h5>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/u-4.png" alt />
              </div>
              <div className="detail-box">
                <h5>UNIQUE TO YOUR NEEDS</h5>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end us section */}
      {/* client section */}
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>What Says Our Customers</h2>
          </div>
          <div
            id="carouselExample2Indicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExample2Indicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExample2Indicators" data-slide-to={1} />
              <li data-target="#carouselExample2Indicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>Consectetur</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>Consectetur</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>Consectetur</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end client section */}
      {/* result section */}
      <section className="result_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="img-box">
                <img src="images/result-img.jpg" alt />
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="detail-box">
                <h2>
                  BUILT TO BRING <br />
                  BEST RESULTS
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit
                </p>
                <a href>Get A Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end result section */}
      {/* contact section */}
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              <span>Get In Touch</span>
            </h2>
          </div>
          <div className="layout_padding2-top">
            <div className="row">
              <div className="col-md-6 ">
                <form action>
                  <div className="contact_form-container">
                    <div>
                      <div>
                        <input type="text" placeholder="Name" />
                      </div>
                      <div>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <input type="text" placeholder="Phone Number" />
                      </div>
                      <div className="mt-5">
                        <input type="text" placeholder="Message" />
                      </div>
                      <div className="mt-5">
                        <button type="submit">Send</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div className="map_container">
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                      width={600}
                      height={300}
                      frameBorder={0}
                      style={{ border: 0, width: "100%", height: "100%" }}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section */}
    </>
  );
}

export default Home;
