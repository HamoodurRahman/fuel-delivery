import React, { useEffect, useState } from "react";
import "./stations.css";
import { For } from "babel-plugin-jsx-control-statements";

const Stations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost/fueldelivery/admin/api/stations.php?key=%C2%A3$123((77^-4fr"
    )
      .then((x) => x.json())
      .then((y) => {
        setData(y)
      });
  });

  return (
    <>
      <div className="teamWrapper">
        <div className="container">
          <div className="teamGrid">
            <For each="item" index="i" of={data}>
              <div className="colmun">
                <div className="teamcol">
                  <div className="teamcolinner">
                    <div className="member-name">
                      {" "}
                      <h2 align="center">Mohamed Yousef</h2>{" "}
                    </div>
                    <div className="member-info">
                      <p align="center">
                        Lorem Ipsum is a simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="member-mail">
                      {" "}
                      <p align="center">
                        {" "}
                        <a href="mailto:@gmail.com">mailto:@gmail.com</a>{" "}
                      </p>{" "}
                    </div>
                    <div className="member-social">
                      <ul className="social-listing">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </For>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stations;
