import React from 'react';
import font from "../../image/font-cook.png"
import './Contact.css'
const Contact = () => {
    return (
       <>
           <article className="contact">
               <div className="ContactBanner">
                   <img src={font} alt="imageContact" className="photoContact"/>
               </div>
               <div className="contactForm">
                   <form className="form">
                       <input id="First Name" type="text" className="input" placeholder="First Name"/>
                       <input id="Last Name" type="text" placeholder="Last Name" className="input"/>
                       <input type="number" id="Phone" className="input" placeholder="Phone"/>
                       <input type="date" className="input"/>
                       <textarea cols="30" rows="10" defaultValue="Comment"></textarea>
                       <button type="submit">Send</button>
                   </form>
               </div>
           </article>
       </>
    );
};

export default Contact;
