import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/img/logo.png';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 100); // Adjust threshold as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header_area ${isScrolled ? 'navbar_fixed' : ''}`}>
            <div className='main_menu'>
                
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <Link className="navbar-brand logo_h" to="/">
                                    <img src={logo} alt="Logo" height='77' />
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    onClick={toggleMenu}
                                >
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>

                                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                                    <ul className="nav navbar-nav menu_nav justify-content-end">
                                        <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                                        {/* <li className="nav-item submenu dropdown">
                                    <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false">Pages</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                                        <li className="nav-item"><a className="nav-link" href="portfolio-details.html">Portfolio Details</a></li>
                                    </ul>
                                </li> */}
                                        {/* <li className="nav-item submenu dropdown">
                                    <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false">Blog</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                                        <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                                    </ul>
                                </li> */}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    

            </div>
        </header>

    );
};

export default Header;
