import React from 'react';
import "./Checkbox.css"

function Checkbox() {
        return (
            <div className="check">
                <div>
                    <input type="checkbox" id="checkbox1" className="mi-clase-checkbox"/>
                    <label htmlFor="checkbox1" className="mi-clase-label"></label>

                    <input type="checkbox" id="checkbox2" className="mi-clase-checkbox"/>
                    <label htmlFor="checkbox2" className="mi-clase-label"></label>

                    <input type="checkbox" id="checkbox3" className="mi-clase-checkbox"/>
                    <label htmlFor="checkbox3" className="mi-clase-label"></label>
                </div>

            </div>
        );
}
export default Checkbox;
