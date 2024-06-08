import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const query = `
{
     socialsCollection {
        items{
          github
          linkedin
          medium
          instagram
          
        }
    }
}
`;

const FooterThree = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://graphql.contentful.com/content/v1/spaces/p05rn7o2m1ym', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer PzdBS9ZSKMsotAqe1yu0b-YwlHgieSEgIZ5ksy7s674',
            },
            body: JSON.stringify({ query }),
          });
    
          const { data } = await response.json();
          setData(data.socialsCollection.items[0]);
        };
    
        fetchData();
     }, []);
    
     if (!data) {
        return <div>Loading...</div>;
     }




    return (
        <>
            <div className="footer__area pt-60 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12">
                            <div className="footer__area-widget t-center">
                                <div className="footer__area-widget-about">
                                    <div className="footer__area-widget-about-social three">
                                        <ul>
                                            <li><Link to=''><i className="fab fa-facebook-f"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-twitter"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-behance"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-linkedin-in"></i></Link> </li>
                                            <li><Link to=''><i className="fal fa-basketball-ball"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-pinterest-p"></i></Link> </li>
                                            <li><a href={data.instagram} target='blank'><i className="fab fa-instagram"></i></a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright__area">
                <div className="container">
                    <div className="row align-items-center copyright__area-border">
                        <div className="col-xl-12">
                            <div className="copyright__area-left t-center">
                                <p>Copyright © 2024 | Patrick Medley </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterThree;