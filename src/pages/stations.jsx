import React, { useEffect, useState } from "react";
import "./stations.css";

const Stations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost/fueldelivery/admin/api/stations.php?key=%C2%A3$123((77^-4fr"
    )
      .then((x) => x.json())
      .then((y) => {
        setData(y);
        console.log(y);
      });
  }, []);

  return (
    <>
      <div className="teamWrapper">
        <div className="container">
          <div className="teamGrid">
            {
              data.map((item) => {
                return (<div className="colmun col-12 col-md-6 col-lg-4">
                  <div className="teamcol">
                    <div className="teamcolinner">
                      <div className="member-name">
                        {" "}
                        <h2 align="center">{item.NameoffuelStation}</h2>{" "}
                      </div>
                      <div className="member-info">

                      </div>
                      <div className="member-mail">
                        {" "}
                        <p align="center">
                          {" "}
                          <span>{item.FullName}</span><br />
                          <span>{item.LocationoffuelStation}</span><br />
                          <a style={{ "word-wrap": "break-word", fontSize: "small" }} href={"mailto:" + item.Email}>{item.Email}</a>{" "}
                          <br /><a href={"tel:" + item.MobileNumber}>0{item.MobileNumber}</a>{" "}
                        </p>{" "}
                        <br />

                        <div className="map-responsive">
                          <iframe src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=" + item.NameoffuelStation} width={600} height={300} frameBorder={0} style={{ border: 0, width: '100%', height: '100%', marginBottom: '-7px' }} allowFullScreen />
                          {/* Eiffel+Tower+Paris+France */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Stations;
