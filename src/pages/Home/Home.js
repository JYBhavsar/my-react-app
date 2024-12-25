import React from "react";
import "./Home.css";
import "../../assets/style/home.scss";
import homeImg from '../../assets/banner/home-right.png';
import aboutusImg from '../../assets/img/about-us.png'

const Home = () => (
    <>
        <section className="home_banner_area">
            <div className="banner_inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="banner_content">
                                <h3 className="text-uppercase">Hell0</h3>
                                <h2 className="text-uppercase">I am Jay Bhavsar</h2>
                                <h5 className="text-uppercase">Passionate Full-Stack Developer</h5>
                                <div className="d-flex align-items-center">
                                    <a className="primary_btn" href="/"><span>Hire Me</span></a>
                                    <a className="primary_btn tr-bg" href="/"><span>Get CV</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="home_right_img">
                                <img className="" src={homeImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!--================ Start About Us Area =================--> */}
        <section className="about_area section_gap">
            <div className="container">
                <div className="row justify-content-start align-items-center">
                    <div className="col-lg-5">
                        <div className="about_img">
                            <img className="" src={aboutusImg} alt="" />
                        </div>
                    </div>

                    <div className="offset-lg-1 col-lg-5">
                        <div className="main_title text-left">
                            <h2>let&apos;s <br />Introduce about<br />myself</h2>
                            <p>
                                Hello! I&apos;m Jay Bhavsar, with over 4 years of experience as a Java Developer.
                                I led impactful projects, including a Finance Management Portal, achieving an 85% improvement in tracking accuracy.
                                My technical expertise lies in Core Java, Spring Boot, Spring MVC, Hibernate, and PostgreSQL.
                                I pride myself on my ability to lead projects from conception to delivery
                                while collaborating with teams to solve complex challenges.
                            </p>
                            <p>
                                When I&apos;m not coding, I enjoy exploring new technologies
                                and staying updated with industry trends. Let&apos;s connect and bring your ideas to life!
                            </p>
                            <a className="primary_btn" href="/"><span>Download CV</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* // =============== End About Us Area ================= */}

        {/* <!--================ Start Brand Area =================--> */}
        <section className="brand_area section_gap_bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={require('../../assets/img/brands/logo1.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={require('../../assets/img/brands/logo2.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={require('../../assets/img/brands/logo3.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={require('../../assets/img/brands/logo4.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={require('../../assets/img/brands/logo5.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={require('../../assets/img/brands/logo6.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={require('../../assets/img/brands/logo7.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={require('../../assets/img/brands/logo8.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={require('../../assets/img/brands/logo9.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-lg-2 col-lg-4 col-md-6">
                        <div className="client-info">
                            <div className="d-flex mb-50">
                                <span className="lage">04</span>
                                <span className="smll">Years Experience Working</span>
                            </div>
                            <div className="call-now d-flex">
                                <div>
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div className="ml-15">
                                    <p>Whats App us now</p>
                                    <h3>(+91)-81285-01096</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================ End Brand Area =================-->  */}

        {/* <!--================ Start Features Area =================--> */}
        <section className="features_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="main_title">
                            <h2>service offers </h2>
                            <p>
                            As a seasoned IT engineer and developer, 
                            I provide the following services to help businesses 
                            and individuals achieve their goals
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row feature_inner">
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={require('../../assets/img/services/s1.png')} alt="" />
                            <h4>Custom Software Development</h4>
                            <p>Build scalable, secure, and efficient software tailored to your needs using Java, Spring Boot, and Hibernate.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={require('../../assets/img/services/s2.png')} alt="" />
                            <h4>Database Design & Management</h4>
                            <p>Offer robust database solutions using PostgreSQL for high performance and reliability.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={require('../../assets/img/services/s3.png')} alt="" />
                            <h4>Technical Consulting</h4>
                            <p>Provide expert advice on software architecture, microservices design, and technology stack optimization.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={require('../../assets/img/services/s4.png')} alt="" />
                            <h4>Freelance Project Management</h4>
                            <p>Lead and manage your IT projects, ensuring timely delivery and high-quality results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================ End Features Area =================--> */}

        {/* <!--================Start Portfolio Area =================--> */}
        <section className="portfolio_area" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main_title text-left">
                            <h2>quality work <br />
                                Recently done project </h2>
                        </div>
                    </div>
                </div>
                <div className="filters portfolio-filter">
                    <ul>
                        <li className="active" data-filter="*">all</li>
                        <li data-filter=".popular">popular</li>
                        <li data-filter=".latest"> latest</li>
                        <li data-filter=".following">following</li>
                        <li data-filter=".upcoming">upcoming</li>
                    </ul>
                </div>

                <div className="filters-content">
                    <div className="row portfolio-grid justify-content-center">
                        <div className="col-lg-4 col-md-6 all latest">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                    <img className="img-fluid w-100" src={require('../../assets/img/portfolio/p1.jpg')} alt="" />
                                    <div className="overlay"></div>
                                    <a href="img/portfolio/p1.jpg" className="img-gal">
                                        <div className="icon">
                                            <span className="lnr lnr-cross"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">minimal design</a></h4>
                                    <p>Animated, portfolio</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 all popular">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                    <img className="img-fluid w-100" src={require('../../assets/img/portfolio/p2.jpg')} alt="" />
                                    <div className="overlay"></div>
                                    <a href="img/portfolio/p2.jpg" className="img-gal">
                                        <div className="icon">
                                            <span className="lnr lnr-cross"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">Paint wall</a></h4>
                                    <p>Animated, portfolio</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 all latest">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                    <img className="img-fluid w-100" src={require('../../assets/img/portfolio/p3.jpg')} alt="" />
                                    <div className="overlay"></div>
                                    <a href="img/portfolio/p3.jpg" className="img-gal">
                                        <div className="icon">
                                            <span className="lnr lnr-cross"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">female light</a></h4>
                                    <p>Animated, portfolio</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 all popular">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                    <img className="img-fluid w-100" src={require('../../assets/img/portfolio/p4.jpg')} alt="" />
                                    <div className="overlay"></div>
                                    <a href="img/portfolio/p4.jpg" className="img-gal">
                                        <div className="icon">
                                            <span className="lnr lnr-cross"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">fourth air</a></h4>
                                    <p>Animated, portfolio</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 all following">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                    <img className="img-fluid w-100" src={require('../../assets/img/portfolio/p5.jpg')} alt="" />
                                    <div className="overlay"></div>
                                    <a href="img/portfolio/p5.jpg" className="img-gal">
                                        <div className="icon">
                                            <span className="lnr lnr-cross"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">together sign</a></h4>
                                    <p>Animated, portfolio</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 all upcoming">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                    <img className="img-fluid w-100" src={require('../../assets/img/portfolio/p6.jpg')} alt="" />
                                    <div className="overlay"></div>
                                    <a href="img/portfolio/p6.jpg" className="img-gal">
                                        <div className="icon">
                                            <span className="lnr lnr-cross"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">multiply fowl</a></h4>
                                    <p>Animated, portfolio</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 all upcoming following">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                    <img className="img-fluid w-100" src={require('../../assets/img/portfolio/p7.jpg')} alt="" />
                                    <div className="overlay"></div>
                                    <a href="img/portfolio/p7.jpg" className="img-gal">
                                        <div className="icon">
                                            <span className="lnr lnr-cross"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">green heaven</a></h4>
                                    <p>Animated, portfolio</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 all following">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                    <img className="img-fluid w-100" src={require('../../assets/img/portfolio/p8.jpg')} alt="" />
                                    <div className="overlay"></div>
                                    <a href="img/portfolio/p8.jpg" className="img-gal">
                                        <div className="icon">
                                            <span className="lnr lnr-cross"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="short_info">
                                    <h4>fly male</h4>
                                    <p>Animated, portfolio</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 all upcoming">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                    <img className="img-fluid w-100" src={require('../../assets/img/portfolio/p9.jpg')} alt="" />
                                    <div className="overlay"></div>
                                    <a href="img/portfolio/p9.jpg" className="img-gal">
                                        <div className="icon">
                                            <span className="lnr lnr-cross"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">season face</a></h4>
                                    <p>Animated, portfolio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================End Portfolio Area =================--> */}
    </>

);

export default Home;
