import React from 'react';
import {Link} from 'react-router-dom';
import '../Component/Navbar.css'

const Navbar = ()=>{
    return(

    <nav className="navbar navbar-expand-lg navbar-light ">
    <Link className="navbar-brand" to="#">Fav Film</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/Favorite-Films">Fav Film <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/characters">Character</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/characters?type=films">Film</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/questions">Question</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contactus">Contact Us</Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}
export default Navbar;