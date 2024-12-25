import React from "react";
import { Link } from "react-router";
import "./Contact.css";
import "./Contact.scss";
import { RiHomeSmileLine, RiPhoneLine, RiMailLine  } from "react-icons/ri";
import GoogleMapComponent from '../../components/GoogleMap/GoogleMap';


const Contact = () => {
  //const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  //const [errors, setErrors] = useState({});

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!formData.name) newErrors.name = "Name is required.";
  //   if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
  //   if (!formData.message) newErrors.message = "Message cannot be empty.";
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     alert("Form submitted!");
  //     setFormData({ name: "", email: "", message: "" });
  //   }
  // };

  return (
    <>
      {/* <!--================ Start Banner Area =================--> */}
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content text-center">
              <h2>Contact Us</h2>
              <div className="page_link">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Banner Area =================--> */}

      {/* <!--================Contact Area =================--> */}
      <section className="contact_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="contact_info">
                <div className="info_item">
                  <i className=""><RiHomeSmileLine style={{ color: ' #4458dc' }}/></i>
                  <h6>Gujarat, India</h6>
                  <p>Ahmedabad</p>
                </div>
                <div className="info_item">
                  <i><RiPhoneLine style={{ color: ' #4458dc' }}/></i>
                  <h6><a href="/">(+91) 81285-01096</a></h6>
                  <p>WhatsApp On This</p>
                </div>
                <div className="info_item">
                  <i><RiMailLine  style={{ color: ' #4458dc' }}/></i>
                  <h6><a href="/">bhavsarjay0101@outlook.com</a></h6>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <form className="row contact_form" action="contact_process.php" method="post" id="contactForm">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name"/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message"/>
                  </div>
                </div>
                <div className="col-md-12 text-right">
                  <button type="submit" value="submit" className="primary_btn">
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div id="mapBox" className="mapBox">
            <GoogleMapComponent />
          </div>
        </div>
      </section>
      {/* <!--================Contact Area =================--> */}

    </>
  );
};

export default Contact;
