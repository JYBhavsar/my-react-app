import React from "react";
import "./About.css";
import aboutusImg from '../../assets/img/about-us.png'

const About = () => (

  <>
     {/* <!--================ Start Banner Area =================--> */}
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div className="banner_content text-center">
            <h2>About Us</h2>
            <div className="page_link">
              <a href="index.html">Home</a>
              <a href="about.html">About</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--================ End Banner Area =================--> */}

    {/* <!--================ Start About Us Area =================--> */}
    <section className="about_area section_gap">
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-lg-5">
            <div className="about_img">
              <img className="" src={aboutusImg} alt=""/>
            </div>
          </div>

          <div className="offset-lg-1 col-lg-5">
            <div className="main_title text-left">
              <h2>let’s <br/>Introduce about<br/>myself</h2>
                <p>
                  Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven
                  midst their. Beast creepeth. Fish days.
                </p>
                <p>
                  Is give may shall likeness made yielding spirit a itself together created after sea
                  is in beast beginning signs open god you're gathering whose gathered cattle let.
                  Creature whales fruit unto meat the life beginning all in under give two.
                </p>
                <a className="primary_btn" href="/"><span>Download CV</span></a>
              </div>
              </div>
          </div>
        </div>
      </section></>
  // =============== End About Us Area =================
);

export default About;
