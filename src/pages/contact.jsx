import React, { useEffect, useState } from "react";
let Contact = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      "http://localhost/fueldelivery/admin/api/contact.php?key=%C2%A3$123((77^-4fr"
    )
      .then((x) => x.json())
      .then((y) => {
        setData(y);
        console.log(y);
      });
  }, []);
  return (
    <>
      {/* contact section */}
      <section className="contact_section layout_padding" id="contact">
        <div className="container">
          <div className="heading_container">
            <h2>
              <span>
                Get In Touch
              </span>
            </h2>
          </div>
          <div className="layout_padding2-top">
            <div className="row">
              <div className="col-md-6 ">
                <form action>
                  <div className="contact_form-container">
                    <div>
                      <div className="d-flex pt-5">
                        <i className="bi bi-geo-alt-fill text-primary px-2"></i><p style={{ fontWeight: 'bold' }}>Location:</p><p className="px-4">{data.PageDescription}</p>
                      </div>
                      <div className="d-flex pt-4">
                        <i class="bi bi-envelope-fill text-primary px-2"></i><p style={{ fontWeight: 'bold' }}>Email:</p><p className="px-5"> {data.Email}</p>
                      </div>
                      <div className="d-flex pt-4">
                        <i class="bi bi-telephone-fill text-primary px-2"></i><p style={{ fontWeight: 'bold' }}>Phone:</p><p className="px-5"> 0{data.MobileNumber}</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div className="map_container">
                  <div className="map-responsive">
                    <iframe src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=" + data.PageDescription} width={600} height={300} frameBorder={0} style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen />
                    {/* Eiffel+Tower+Paris+France */}
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

export default Contact;