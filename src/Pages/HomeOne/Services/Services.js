import React from 'react';

const Services = ({data}) => {
    
    const genservices = (data) =>
     [
      {
        id: 1,
        title: 'Languages',
        batch: '01',
        description: data.skill1,
        imgOne: data.skill11Img.url,
        imgTwo: data.skill1Img.url,
        href: '/services-details',
      },
      {
        id: 2,
        title: 'Customer Service',
        batch: '02',
        description: data.skill2,
        imgOne: data.skill22Img.url,
        imgTwo: data.skill2Img.url,
        href: '/services-details',
      },
      {
        id: 3,
        title: 'Web Development',
        batch: '03',
        description: data.skill3,
        imgOne: 'assets/img/icon/services-3.png',
        imgTwo: data.skill3Img.url,
        href: '/services-details',
      },
      {
        id: 4,
        title: 'Designing',
        batch: '04',
        description: data.skill4,
        imgOne: 'assets/img/icon/services-4.png',
        imgTwo: 'assets/img/icon/services-44.png',
        href: '/services-details',
      },
     
    ];
    const servicesData = genservices(data)

    return (
        <div className="services__area section-padding" style={{backgroundImage: `url('assets/img/services.png')`}}>
            <div className="container">
                <div className="row mb-30">
                    <div className="col-xl-12">
                        <div className="services__area-title lg-t-center"> 
                            <span className="subtitle">What can I offer?</span>
                            <h2>My Skills</h2> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    {servicesData.map((item, id)=>(
                        <div className="col-xl-6 col-lg-6 col-md-6" key={id}>
                            <div className="services__area-item"> 
                                <span>{item.batch}</span>
                                <div className="services__area-item-icon">
                                    <img src={item.imgTwo} alt="" />
                                    <div className="services__area-item-icon-one">
                                        <img src={item.imgOne} alt="" />
                                    </div>
                                </div>
                                <div className="services__area-item-content">
                                    <h4><div>{item.title}</div></h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;