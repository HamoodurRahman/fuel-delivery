import React from 'react';
import { Link } from 'react-router-dom';

function Service() {
    return (
        <>
            {/* service section */}
            <section className="service_section layout_padding" id='service'>
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Our Services
                        </h2>
                    </div>
                    <div className="service_container">
                        <div className="box">
                            <img src="images/s-1.jpg" alt="" />
                            <h6 className="visible_heading">
                                CROSSFIT TRAINING
                            </h6>
                            <div className="link_box">
                                <Link to>
                                    <img src="images/link.png" alt="" />
                                </Link>
                                <h6>
                                    CROSSFIT TRAINING
                                </h6>
                            </div>
                        </div>
                        <div className="box">
                            <img src="images/s-2.jpg" alt="" />
                            <h6 className="visible_heading">
                                FITNESS
                            </h6>
                            <div className="link_box">
                                <Link to>
                                    <img src="images/link.png" alt="" />
                                </Link>
                                <h6>
                                    FITNESS
                                </h6>
                            </div>
                        </div>
                        <div className="box">
                            <img src="images/s-3.jpg" alt="" />
                            <h6 className="visible_heading">
                                DYNAMIC STRENGTH TRAINING
                            </h6>
                            <div className="link_box">
                                <Link to>
                                    <img src="images/link.png" alt="" />
                                </Link>
                                <h6>
                                    DYNAMIC STRENGTH TRAINING
                                </h6>
                            </div>
                        </div>
                        <div className="box">
                            <img src="images/s-4.jpg" alt="" />
                            <h6 className="visible_heading">
                                HEALTH
                            </h6>
                            <div className="link_box">
                                <Link to>
                                    <img src="images/link.png" alt="" />
                                </Link>
                                <h6>
                                    HEALTH
                                </h6>
                            </div>
                        </div>
                        <div className="box">
                            <img src="images/s-5.jpg" alt="" />
                            <h6 className="visible_heading">
                                WORKOUT
                            </h6>
                            <div className="link_box">
                                <Link to>
                                    <img src="images/link.png" alt="" />
                                </Link>
                                <h6>
                                    WORKOUT
                                </h6>
                            </div>
                        </div>
                        <div className="box">
                            <img src="images/s-6.jpg" alt="" />
                            <h6 className="visible_heading">
                                STRATEGIES
                            </h6>
                            <div className="link_box">
                                <Link to>
                                    <img src="images/link.png" alt="" />
                                </Link>
                                <h6>
                                    STRATEGIES
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end service section */}

        </>
    );
}

export default Service;
