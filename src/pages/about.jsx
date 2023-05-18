import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function About() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      "http://localhost/fueldelivery/admin/api/about.php?key=%C2%A3$123((77^-4fr"
    )
      .then((x) => x.json())
      .then((y) => {
        setData(y);
        console.log(y);
      });
  }, []);

  return (
    <>
      {/* about section */}
      <section className="about_section layout_padding" id="about">
        <div className="container">
          <div className="heading_container">
            <h2>ABOUT US</h2>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/about-img.png" alt="" />
            </div>
            <div className="detail-box">
              <p>
                {data.PageDescription}
              </p>
              {/* <Link href>Read More</Link> */}
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
    </>
  );
}

export default About;
