import React, { useState, useEffect } from 'react';
import FooterThree from '../../Footer/FooterThree';
import HeaderOne from '../../Header/HeaderOne';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Services from '../Services/Services';
import { pageTitle } from '../../PageTitle';

const query = `
{
    portfolioHomePageCollection {
        items {
          name
          shortDescription
          heroImage { url }
          skill1Img { url }
          skill2Img { url }

          skill3Img { url }
          skill11Img {url}
          skill22Img {url}
          skill33Img {url}
          skill44Img {url}



          skill1
          skill2
          skill3
          skill4
        }
     }
     portfolioProjectsCollection {
        items {
          title
          clientName
          projectDescription
          projectDate
          projectImage { url }
          projectCategory
        }
     }
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

const HomeOne = () => {
    
    pageTitle('Patrick Medley');
    //This is fetching contentful data
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
      setData(data);
    };

    fetchData();
 }, []);

 if (!data) {
    return <div>Loading...</div>;
 }
    
    console.table(data.portfolioHomePageCollection)
    return (
        <>
            <HeaderOne></HeaderOne>
      
            <Banner data={data.portfolioHomePageCollection.items[0]} social={data.socialsCollection.items[0]}/>
            <Features data={data.portfolioHomePageCollection.items[0]}/>
            <Services data={data.portfolioHomePageCollection.items[0]}/>
            {/* <Video bannerBg={bannerBg}></Video> */}
            {/*<Work></Work>*/}
            <FooterThree social={data.socialsCollection.items[0]}></FooterThree>
        </>
    );
};

export default HomeOne;