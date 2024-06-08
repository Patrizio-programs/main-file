import React from 'react';

const Features = ({data}) => {
   



 return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#030404'}}>
      <div style={{ width: '45%' }}>
        <img src={data.heroImage.url} alt="Introduction" style={{ width: '100%', height: 'auto' }} className="intro-image" />
      </div>
      <div style={{ width: '45%' }}>
        <h2 style={{ marginTop: 0 }} className="intro-title">{data.name}</h2>
        <p style={{ marginBottom: 0 }} className="intro-paragraph">{data.shortDescription}</p>
      </div>
    </div>
 );
}

export default Features;
