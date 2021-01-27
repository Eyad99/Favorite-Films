import React from 'react';
import './main.css';
import twitch from './images/twitch.png';
import steam from './images/steam.png';
import upcoming from './images/upcoming.png';
import library from './images/library.png';
import me from './images/eyad.jpg';
import TWD from './images/twd.png';



const Main =()=>{

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
                <div className="">
                    sds
                </div>
            </div>
           <div className="col col-lg-12 col-md-12 film">
                <div className="top-film">
                    <h4>Top Films</h4>
                    <input type="text" />
                </div>
                <div className="fav-film">
                    <div className="card">
                        <img src={TWD} className="image-film" alt="film img" />
                            <div className="info">
                                <h2>Thw Walking Dead</h2>
                                <p>AMC</p>
                                <div className="progress"></div>
                            </div>
                        <h2 className="percentage">60%</h2>
                    </div>
                    
                    <div className="card">
                        <img src={TWD} className="image-film" alt="film img" />
                            <div className="info">
                                <h2>Breajing Bad</h2>
                                <p>AMC</p>
                                <div className="progress"></div>
                            </div>
                        <h2 className="percentage">60%</h2>
                    </div>

                    <div className="card">
                        <img src={TWD} className="image-film" alt="film img" />
                            <div className="info">
                                <h2>Thw Walking Dead</h2>
                                <p>AMC</p>
                                <div className="progress"></div>
                            </div>
                        <h2 className="percentage">60%</h2>
                    </div>
                </div>
           </div>
       </div>
       <div className="circle1"></div>
       <div className="circle2"></div>
    </div>
    )
}


export default Main;