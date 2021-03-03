import React from 'react';
import './footer.css'

const Footer =()=>{
    return(
        <div className="container mt-3 flex cursor">
            <div className="row">
                <div className="col">
                    <span>Copyright © 2021 eyad sharaf almasri</span>
                </div>
                <div className="col">
                    <i className="fa fa-instagram mr-3" aria-hidden="true" title="Instagram"></i>
                    <i className="fa fa-facebook mr-3" aria-hidden="true" title="Facebook"></i>
                    <i className="fa fa-github mr-3" aria-hidden="true" title="Github"></i>
                    <i className="fa fa-linkedin mr-3" aria-hidden="true" title="Linkedin"></i>
                </div>
            </div>
        </div>
    )
}
export default Footer