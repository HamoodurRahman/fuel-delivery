import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* service section */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Services</h2>
          </div>
          <div className="service_container">
            <div className="box">
              <img src="images/s-1.jpg" alt="" />
              <h6 className="visible_heading">ONLINE FUEL ORDERING</h6>
              <div className="link_box">
                <Link to>
                  <img src="images/link.png" alt="" />
                </Link>
                <h6>ONLINE FUEL ORDERING</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/s-2.jpg" alt="" />
              <h6 className="visible_heading">DELIVERY SCHEDULING</h6>
              <div className="link_box">
                <Link to>
                  <img src="images/link.png" alt="" />
                </Link>
                <h6>DELIVERY SCHEDULING</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/s-3.jpg" alt="" />
              <h6 className="visible_heading">FUEL MANAGEMENT SYSTEM</h6>
              <div className="link_box">
                <Link to>
                  <img src="images/link.png" alt="" />
                </Link>
                <h6>FUEL MANAGEMENT SYSTEM</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/s-4.jpg" height="100%" alt="" />
              <h6 className="visible_heading">PAYMENT OPTIONS</h6>
              <div className="link_box">
                <Link to>
                  <img src="images/link.png" alt="" />
                </Link>
                <h6>PAYMENT OPTIONS</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/s-5.jpg" alt="" />
              <h6 className="visible_heading">MOBILE FUELING</h6>
              <div className="link_box">
                <Link to>
                  <img src="images/link.png" alt="" />
                </Link>
                <h6>MOBILE FUELING</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/s-6.jpg" alt="" />
              <h6 className="visible_heading">ORDER TRACKING</h6>
              <div className="link_box">
                <Link to>
                  <img src="images/link.png" alt="" />
                </Link>
                <h6>ORDER TRACKING</h6>
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
                <img src="images/u-1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>CONVENIENCE</h5>
                <p>
                  Online fuel delivery is more convenient than having to go to a gas station or fuel depot.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/u-2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>TIME-SAVING</h5>
                <p>
                  Online fuel delivery can save customers time since they don't have to wait in line at the gas station or fuel depot.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/u-3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>COST-EFFECTIVES</h5>
                <p>
                  Online fuel delivery can be cost-effective since companies can offer competitive prices and customers can save on transportation costs.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/u-4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>ENVIROMENTALLY FRIENDLY</h5>
                <p>
                  Online fuel delivery can be more environmentally friendly.
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
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>James Howlett</h5>
                    <p>
                      Great service, efficient communication and a really easy way to get a fuel from the site.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client 2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>King David</h5>
                    <p>
                      Excellent customer service! Whenever I needed something they were there for me. Thank you guys
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client 3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>John D. Rockefeller</h5>
                    <p>
                      Excelent Work!<br />
                      This website is easy to use.
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
                <img src="images/result-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="detail-box">
                <h2>
                  BUILT TO BRING <br />
                  BEST RESULTS
                </h2>
                <p>
                  Online fuel delivery offers a high level of convenience to customers who may find it difficult or time-consuming to visit a petrol station. With the website, customers can order fuel from the comfort of their homes or offices, and have it delivered to their doorstep at a convenient time.<br/>

                  It saves customers time that would have been spent traveling to a petrol station, waiting in line, and filling up their tanks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end result section */}
    </>
  );
}

export default Home;
