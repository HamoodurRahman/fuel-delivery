// import { Link } from "react-router-dom";

function About() {
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
                Welcome to our online fuel delivery platform! <br /><br />

                We are a team of experienced professionals who are dedicated to making fuel delivery easier, more convenient, and more affordable for businesses and individuals. Our platform allows customers to order fuel online and have it delivered directly to their location, saving time and money.<br /><br />

                Our mission is to provide high-quality fuel delivery services to our customers while promoting sustainability and reducing our environmental impact. We believe that online fuel delivery is the future of the industry and are committed to staying at the forefront of innovation and technology.<br /><br />

                Our team is made up of fuel industry experts, logistics professionals, and technology specialists who are passionate about delivering exceptional customer service. We are proud to have built a platform that is reliable, user-friendly, and cost-effective.<br /><br />

                We understand that fuel delivery is an essential service for many businesses, which is why we offer 24/7 customer support and emergency fuel delivery services. Our goal is to make fuel delivery as easy and stress-free as possible for our customers.<br /><br />

                Thank you for choosing our platform for your fuel delivery needs. We look forward to serving you and making your fuel delivery experience as smooth and convenient as possible.
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
