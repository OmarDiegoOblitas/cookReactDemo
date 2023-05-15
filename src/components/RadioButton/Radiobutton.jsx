import React from "react";
import "./Radiobutton.css";

function Radiobutton() {

    return (
        <div className="radio">
            <div className="space-radio">
                <input type="radio" id="radio1" name="mi-radio-group" className="mi-clase-radio"/>
                <label htmlFor="radio1" className="mi-clase-label-radio">input1</label>

                <input type="radio" id="radio2" name="mi-radio-group" className="mi-clase-radio"/>
                <label htmlFor="radio2" className="mi-clase-label-radio">input2</label>

                <input type="radio" id="radio3" name="mi-radio-group" className="mi-clase-radio"/>
                <label htmlFor="radio3" className="mi-clase-label-radio">input3</label>
            </div>
        </div>
    );
}
export default Radiobutton;
