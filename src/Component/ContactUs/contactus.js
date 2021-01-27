import React, { Component } from 'react';
import contactus from '../../contact_us.svg';

class ContactUs extends Component{
    render(){
        return(
            <div className="container contactus mt-5 mb-5">
            <div className="row m-3">
                <div className="col-lg-6 col-sm-12">
                <form method="" action="">
                    <label >Name</label>
                    <input className="form-control" type="text" name="name" placeholder="Name" />
                    <label >Email</label>
                    <input className="form-control" type="email" name="email" placeholder="Email" />
                    <label >Content</label>

                    <textarea className="form-control" name="description" rows="10" color="50" placeholder="Content"></textarea>
                </form>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img src={contactus} alt="Svg Image" width="100%" height="100%" />
                </div>
            </div>
    </div>   
        )
    }
}
export default ContactUs;