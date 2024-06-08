import React, { useState, useEffect } from 'react';
import FooterThree from '../Footer/FooterThree';
import { pageTitle } from '../PageTitle';
import Header from '../Header/HeaderOne';



const query = `
{
    portfolioProjectsCollection{
        items{
          title
          clientName
          projectDescription
          projectDate
          projectImage{url}
          projectCategory
        }
      }
}
`;

const PortfolioDetails = () => {
    pageTitle('Portfolio Details');

    const [data, setData] = useState(null);
    const [proj1, setProj1] = useState(null);
    const [proj2, setProj2] = useState(null);


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
          setData(data);
          setProj1(data.portfolioProjectsCollection.items[0])
          setProj2(data.portfolioProjectsCollection.items[1])

          
        };
    
        fetchData();
     }, []);
    
     if (!data) {
        return <div>Loading...</div>;
     }
        
        console.table(data.portfolioProjectsCollection.items)


        const portfolioData = [
            {
                title: proj1.title,
               description: proj1.projectDescription,
               details: [
                 { key: 'Client', value: proj1.clientName },
                 { key: 'Category', value: proj1.projectCategory },
                 { key: 'Date', value: new Date(proj1.projectDate).toLocaleDateString('en-US', { year: 'numeric',
                 month: 'long',
                 day: 'numeric',
                 }),}
               ],
               image: proj1.projectImage.url,
            },
            {
               title: proj2.title,
               description: proj2.projectDescription,
               details: [
                 { key: 'Client', value: proj2.clientName},
                 { key: 'Category', value: proj2.projectCategory },
                 { key: 'Date', value:  new Date(proj2.projectDate).toLocaleDateString('en-US', { year: 'numeric',
                 month: 'long',
                 day: 'numeric',
                 }),},
               ],
               image: proj2.projectImage.url,
            },
           ];
           
    
    return (
        <>
            <Header></Header>
            <div className="portfolio__details section-padding">
                <div className="container">
                    {portfolioData.map((portfolio, index) => (
                        <div key={index} className="row" style={{margin: "20px"}}>
                            <div className="col-xl-4 col-lg-4 lg-mb-30">
                                <div className="all__sidebar mr-30 xl-mr-0">
                                    <div className="all__sidebar-item details">
                                        <h4>Project Details</h4>
                                        <div className="all__sidebar-item-details">
                                            {portfolio.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="all__sidebar-item-details-list">
                                                    <h6>{detail.key} :</h6>
                                                    <span>{detail.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="portfolio__details-left">
                                    <div className="portfolio__details-left-content">
                                        <h2 className="mb-30">{portfolio.title}</h2>
                                        <p>{portfolio.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="portfolio__details-image">
                                    <img src={portfolio.image} alt={portfolio.title} />
                                </div>
                            </div>
                            <div style={{ borderBottom: '3px solid #444', marginBottom: '20px', paddingBottom: '20px' }}>
</div>
                        </div>
                        
                    ))}
                    
                </div>
                
            </div>
            
            <FooterThree></FooterThree>
        </>
    );
};

export default PortfolioDetails;
