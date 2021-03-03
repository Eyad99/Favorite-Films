import React from 'react';
import {Link} from 'react-router-dom';
import '../Component/Navbar.css';
import { useTranslation } from "react-i18next";
import LanguageSelect from "../languageSelect";

const Navbar = ()=>{
    const { t } = useTranslation();

    return(

    <nav className="navbar navbar-expand-lg navbar-light ">
    <Link className="navbar-brand" to="#">{t("fav_films")}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse justify-content-between " id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/Favorite-Films">Fav Films<span className="sr-only">(current)</span></Link>
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
                    <Link className="nav-link" to="/Paginate">Paginate</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contactus">Contact Us</Link>
                </li>
            </ul>
            <LanguageSelect/>
        </div>
    </nav>
    )
}
export default Navbar;