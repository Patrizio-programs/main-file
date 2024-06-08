import React from 'react';


const Banner = ({data, social}) => {


    return (
        <div className="banner__area">
            <div className="container hero">
                <div className="row">
                    <div className="col-xl-12">
                            <h1>Welcome to my <br></br><span>Website</span></h1> 
                            <br></br>
                            <h3>{data.name}</h3>
                    </div>
                </div>
            </div>
            <div className="banner__area-bottom">
                <div className="banner__area-bottom-icon">
                    <ul>
                        <li><a href={social.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>

                        <li><a href={social.medium} target="_blank" rel="noopener noreferrer"><i className="fab fa-medium"></i></a></li>
                        <li><a href={social.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;