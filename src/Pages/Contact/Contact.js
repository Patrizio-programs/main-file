import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterThree';
import Header from '../Header/HeaderOne';
import { pageTitle } from '../PageTitle';

const query = `
{
    contactInfoCollection{
        items{
          email
          phone
          address {
            lat
            lon
          }
         
        }
      }
}
`;
const Contact = () => {
    pageTitle('Contact');
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
          setData(data.contactInfoCollection.items[0]);
        };
    
        fetchData();
     }, []);
    
     if (!data) {
        return <div>Loading...</div>;
     }

     console.log(data.email)


    return (
        <>
        <Header></Header>
        <div className="contact__area section-padding">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-5 col-lg-6">
                        <div className="contact__area-title">
                            <span className="subtitle">Contact Me</span>
                            <h2>Need to get in touch?</h2> 
                        </div>
                        <div className="contact__area-info">
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="far fa-phone-alt"></i>
                                    <span>Phone :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <a href={["tel:",data.phone]}>{data.phone}</a>
                                </div>
                            </div>
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="fal fa-envelope"></i>
                                    <span>Email :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <a href="mailto:support@gamil.com">{data.email}</a>
                                </div>
                            </div>
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="far fa-map-marker-alt"></i>
                                    <span>Location :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <Link to="#">Saint Vincent and the Grenadines</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact__area-bottom">
                            <div className="contact__area-bottom-form page">

                            
                            <iframe title='frame'
 src="https://1cm3dbj8wct.typeform.com/to/PX5YWmhF"
 width="100%"
 height="320"
 frameBorder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowFullScreen
></iframe>
                           
                           
                                        </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterThree></FooterThree>
        </>
    );
};

export default Contact;