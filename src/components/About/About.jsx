import React from 'react';
import "./About.css";
import img1 from"../../image/pastel2.jpeg";
import img2 from"../../image/pastel4.png";
import img3 from"../../image/pastel3.png";
import img4 from"../../image/pastel.png";
import {AiFillHeart} from "react-icons/ai";
import {GiMedalSkull} from "react-icons/gi";
import {GoBook} from "react-icons/go";

const About = () => {
    return (
        <>
            <article className="aboutContent">
                <div className="aboutInfo">
                    <h2>Our products are handmade with love and care &
                        <span> We use high quality ingredients to offer the best flavors</span>
                    </h2>
                    <p>
                        We take pride in offering the highest quality products,
                        handcrafted with fresh, natural ingredients.
                        We are dedicated to perfecting our recipes to share our passion
                        for desserts with the world. We believe that food is a way to connect
                        with others and celebrate the important moments in life. We hope our
                        products help you create sweet and unforgettable moments with your loved ones.
                    </p>
                    <div className="imgImage">
                        <img src={img3} alt="imgTree" className="iconImg"/>
                        <img src={img1} alt="imgFirst" className="iconImg"/>
                        <img src={img2} alt="imgSecond" className="iconImg"/>
                    </div>
                </div>
                <div>
                    <img src={img4} alt="ImgCook" className="cookCenter"/>
                </div>
                <div className="aboutDescription">
                    <div>
                        <AiFillHeart className="aboutIcon"/><span>passion for what we do</span>
                    </div>
                    <div>
                        <GiMedalSkull className="aboutIcon"/> <span>Our Quality supports us</span>
                    </div>
                    <div>
                        <GoBook className="aboutIcon"/><span>Homemade recipes in our elaborations</span>
                    </div>
                </div>
            </article>
        </>
    );
};

export default About;
