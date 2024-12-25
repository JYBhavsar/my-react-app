import React from 'react';
import { Link } from "react-router";


const Services = () => {
    return (
        <>
            {/* <!--================ Start Banner Area =================--> */}
            <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                        <div className="banner_content text-center">
                            <h2>Services</h2>
                            <div className="page_link">
                                <Link to="/">Home</Link>
                                <Link to="/services">Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================ End Banner Area =================--> */}
            {/* <!--================ Start Features Area =================--> */}
            <section className="features_area section_gap_top ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="main_title">
                                <h2>service offers </h2>
                                <p>
                                    Is give may shall likeness made yielding spirit a itself togeth created
                                    after sea <br /> is in beast beginning signs open god you&apos;re gathering ithe
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row feature_inner">
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src={require('../../assets/img/services/s1.png')} alt="" />
                                <h4>Wp developing</h4>
                                <p>Creeping for female light years that lesser can&apos;t evening heaven isn&apos;t bearing tree</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src={require('../../assets/img/services/s2.png')} alt="" />
                                <h4>UI/ux design</h4>
                                <p>Creeping for female light years that lesser can&apos;t evening heaven isn&apos;t bearing tree</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src={require('../../assets/img/services/s3.png')} alt="" />
                                <h4>Web design</h4>
                                <p>Creeping for female light years that lesser can&apos;t evening heaven isn&apos;t bearing tree</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src={require('../../assets/img/services/s4.png')} alt="" />
                                <h4>seo optimize</h4>
                                <p>Creeping for female light years that lesser can&apos;t evening heaven isn&apos;t bearing tree</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================ End Features Area =================--> */}
        </>
    );
};

export default Services;