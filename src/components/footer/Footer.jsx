import React from 'react';
import {BsFacebook, BsInstagram} from "react-icons/bs";
import {FaTwitter} from "react-icons/fa";
import {IoCallSharp,IoTimeOutline} from "react-icons/io5";
import {AiOutlineMail} from "react-icons/ai";
import { SiGooglemaps} from "react-icons/si";
import {RxCookie} from "react-icons/rx";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footerInfo">
                    <div className="footerLogo">
                        <RxCookie className="linkSocial"/>
                        <h3>Sweer Dreams</h3>
                    </div>
                    <div className="footerP">
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, consectetur dicta est et expedita laborum minus nemo odio praesentium quaerat</p>
                    </div>
                    <div className="footerLink">
                        <a href="https://afaklfnanf.com"><BsFacebook className="linkSocial"/></a>
                        <a href="https://afaklfnanf.com"><BsInstagram className="linkSocial"/></a>
                        <a href="https://afaklfnanf.com"><FaTwitter className="linkSocial"/></a>
                    </div>
                </div>

                <div className="hours">
                    <h3>Open Hours</h3>
                    <div className="footerHours">
                        <div className="hoursTime">
                            <IoTimeOutline className="styleIcon"/>
                            <h5>Tue - Fri: <span>10:00 - 19:00</span></h5>
                        </div>
                        <div className="hoursTime">
                            <IoTimeOutline className="styleIcon"/>
                            <h5>Sat - Sun: <span>13:00 - 20:00</span></h5>
                        </div>
                    </div>
                </div>
                <div className="footerContact">
                    <h3>Contact Us</h3>
                    <div className="footerContactSection">
                        <div className="footerContactInfo">
                            <SiGooglemaps className="styleIcon"/>
                            <span>+591-73292019</span>
                        </div>
                        <div className="footerContactInfo">
                            <IoCallSharp className="styleIcon"/>
                            <span>#1412 Av.Camacho La Paz - bolivia</span>
                        </div>
                        <div className="footerContactInfo">
                            <AiOutlineMail className="styleIcon"/>
                            <a href="https://omar79521audi@gmail.com">omar79521audi@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
