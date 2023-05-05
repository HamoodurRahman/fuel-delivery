import React from "react";

const SliderHome = () => {
  return (
    <div className="slider_container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                  <div className="detail-box">
                    <h2>Fuel Delivery Management System</h2>
                    <h1>Time Saving </h1>
                    <p>
                    Online fuel delivery saves customers time as they no longer have to drive to a gas station and wait in line to fill up their vehicle. This service is especially useful for busy individuals who do not have the time to stop at a gas station during their daily routine.
                    </p>
                    {/* <div className="btn-box">
                      <a href className="btn-1">
                        Read More
                      </a>
                      <a href className="btn-2">
                        Get A Quote
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                  <div className="detail-box">
                    <h2>Fuel Delivery Management System</h2>
                    <h1>24/7 Availability</h1>
                    <p>
                    Online fuel delivery services are available 24/7, making it convenient for customers to order fuel at any time of the day or night.
                    </p>
                    {/* <div className="btn-box">
                      <a href className="btn-1">
                        Read More
                      </a>
                      <a href className="btn-2">
                        Get A Quote
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                  <div className="detail-box">
                    <h2>Fuel Delivery Management System</h2>
                    <h1>Convenience</h1>
                    <p>
                      "Fuel up your car without leaving your house. Now that's convenience." <br/>
                      "Why go to the gas station when the gas station can come to you?"
                    </p>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
