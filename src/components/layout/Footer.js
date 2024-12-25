import React from "react";
import "../../assets/style/footer.scss";
import { RiLinkedinFill, RiFacebookFill, RiTwitterFill, RiGithubFill} from "react-icons/ri";
import { Link } from "react-router";


const Footer = () => {
    return (
        <footer className="footer_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="footer_top flex-column">
                            <div className="footer_logo">
                                <Link to="/">
                                    <img src={require('../../assets/img/logo.png')} alt="Logo" />
                                </Link>
                                <h4>Follow Me</h4>
                            </div>
                            <div className="footer_social">
                                <a href="/"><i><RiLinkedinFill /></i></a>
                                <a href="/"><i><RiTwitterFill /></i></a>
                                <a href="/"><i><RiFacebookFill /></i></a>
                                <a href="/"><i><RiGithubFill /></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer_bottom justify-content-center">
                    <p className="col-lg-8 col-sm-12 footer-text">
                        Copyright ©2024 All rights reserved | This template is made with
                        <i className="fa fa-heart-o" aria-hidden="true"></i> by &nbsp;
                        <a href="https://colorlib.com">Colorlib</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;