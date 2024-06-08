import React, { useState, useEffect } from 'react';

const Test = () => {
 const [data, setData] = useState(null);

 const query = `
{
 portfolioHomePageCollection {
    items {
      name
      heroImage {
        url
      }
      shortDescription
    }
 }
}
`;


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
      setData(data.portfolioHomePageCollection.items[0]);
    };

    fetchData();
 }, []);

 if (!data) {
    return <div>Loading...</div>;
 }

 return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.heroImage.url} alt="Hero" />
      <p>{data.shortDescription}</p>
    </div>
 );
};

export default Test;
