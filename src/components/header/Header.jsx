import React, { useState, useEffect } from "react";
import { RxCookie } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.css";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const checkMobile = () => {
        if (window.innerWidth < 690) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    if (isMobile) {
        const mobileMenu = (
            <>
               <div className="mobile">
                   {menuOpen && (
                       <ul className="navMobile" style={{ display: menuOpen ? 'block' : 'none', position: 'absolute', top: '60%', right: 0, }}>
                           <li className="ulLinks">
                               <a href="/" className="mobileA">Home</a>
                           </li>
                           <li className="ulLinks">
                               <a href="/Products" className="mobileA">Products</a>
                           </li>
                           <li className="ulLinks">
                               <a href="/About" className="mobileA">About</a>
                           </li>
                           <li className="ulLinks">
                               <a href="/Contact" className="mobileA">Contact</a>
                           </li>
                       </ul>
                   )}
                   <button className="hamburger-btn" onClick={toggleMenu}>
                       {menuOpen ? <AiOutlineClose /> : <FiMenu />}
                   </button>
               </div>
            </>
        );


        return (
            <nav className="menu">
                <div className="icon">
                    <a href="./">
                        <RxCookie className={`logo ${menuOpen ? "icon-rx" : ""}`} />
                    </a>
                    <h3>Sweet Dreams</h3>
                    {mobileMenu}
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="menu">
                <div className="icon">
                    <a href="./">
                        <RxCookie className="logo" />
                    </a>
                    <h3>Sweet Dreams</h3>
                </div>
                <div className="btn">
                   <div className="btnRoute">
                       <ul className="btnLinks">
                           <li>
                               <a href="/">Home</a>
                           </li>
                           <li>
                               <a href="/Products">Products</a>
                           </li>
                           <li>
                               <a href="/About">About</a>
                           </li>
                           <li>
                               <a href="/Contact">Contact</a>
                           </li>
                       </ul>
                   </div>
                    <div className="btn-sign">
                        <button className="btnRegister">Sign in</button>
                        <button className="btnRegister" type="submit">Login</button>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Header;


