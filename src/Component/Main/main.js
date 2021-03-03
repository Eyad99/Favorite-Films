import React , {useState,useEffect} from 'react';
import './main.css';
import twitch from './images/twitch.png';
import steam from './images/steam.png';
import upcoming from './images/upcoming.png';
import library from './images/library.png';
import me from './images/eyad.jpg';
import TWD from './images/twd.png';
import dd from '../../data.json'
import { get } from 'jquery';
// import BB from './images/bb.png';
// import PB from './images/pb.png';
import { useTranslation } from "react-i18next";


const Main =()=>{
    const { t } = useTranslation();

    const [data]=useState([
        {
            "film_id" : 1,
            "name" : "Breaking Bad",
            "producing_company" : "AMC",
            "percentage" : "90%",
            "img" : "TWD"
        },
        {
            "film_id" : 2,
            "name" : "The walking Dead",
            "producing_company" : "AMC",
            "percentage" : "90%",
            "img" : "the-walking-dead"
        },
        {
            "film_id" : 3,
            "name" : "Prison Break",
            "producing_company" : "AMC",
            "percentage" : "80%",
            "img" : "prison-break"
        }
    
    ]);
  

     const all = data.map(res=>{
        return(
            <div className="card" key={res.film_id}>
            <img src={TWD} className="image-film" alt="film img" />
                <div className="info">
                    <h2>{res.name}</h2>
                    <p>{res.producing_company}</p>
                    <div className="progress"></div>
                </div>
            <h2 className="percentage">{res.percentage}</h2>
        </div>
        )
     })
    return(
    <div className="contentt">
       <div className="row films">
           <div className="col col-lg-12 col-md-12 dashboard-name">
                <div className="user">
                    <img src={me} className="image" alt="Me!!" />
                    <h3>eyad sharaf almasri</h3>
                    <p>Pro Member</p>
                </div>
                <div className="links">
                    <div className="link">
                        <img src={twitch} alt="twitch" />
                        <h2>Films</h2>
                    </div>
                    <div className="link">
                        <img src={steam} alt="steam" />
                        <h2>Steam</h2>
                    </div>
                    <div className="link">
                        <img src={upcoming} alt="upcoming" />
                        <h2>Games</h2>
                    </div>
                    <div className="link">
                        <img src={library} alt="library" />
                        <h2>Library</h2>
                    </div>
                </div>
            
            </div>
           <div className="col col-lg-12 col-md-12 film">
                <div className="top-film">
                    <h4>{t("top_films")}</h4>
                    <input type="text" />
                </div>
                <div className="fav-film">
                    {all}
                </div>
           </div>
       </div>
       <div className="circle1"></div>
       <div className="circle2"></div>
    </div>
    )
}


export default Main;