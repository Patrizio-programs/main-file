import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterThree';
import Header from '../Header/HeaderFour';
import bannerBg from '../../assets/img/video-1.jpg';
import Video from '../HomeOne/Video/Video';
import { pageTitle } from '../PageTitle';

const ServicesPage = () => {
    pageTitle('Services');
    const servicesData = [
        {
            id: 1,
            title: 'UI/UX Designing',
            description: 'Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis',
            imgOne: 'assets/img/icon/service-1.png',
            imgTwo: 'assets/img/icon/services-1.png',
            href: '/services-details',
        },
        {
            id: 2,
            title: 'Web & Apps Development',
            description: 'Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis',
            imgOne: 'assets/img/icon/service-2.png',
            imgTwo: 'assets/img/icon/services-2.png',
            href: '/services-details',
        },
        {
            id: 3,
            title: 'Digital Marketing',
            description: 'Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis',
            imgOne: 'assets/img/icon/service-3.png',
            imgTwo: 'assets/img/icon/services-3.png',
            href: '/services-details',
        },
        {
            id: 4,
            title: 'Branding Strategy',
            description: 'Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis',
            imgOne: 'assets/img/icon/service-4.png',
            imgTwo: 'assets/img/icon/services-4.png',
            href: '/services-details',
        },
    ];
    const feedbackData = [
        {
            id: 1,
            name: 'David Bowie',
            title: 'UX Designer',
            description: 'pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis.',
            quote: 'assets/img/icon/quote.png',
            avatar: 'assets/img/avatar/feedback-1.jpg',
        },
        {
            id: 2,
            name: 'Michel Aoun',
            title: 'Marketing',
            description: 'pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis.',
            quote: 'assets/img/icon/quote.png',
            avatar: 'assets/img/avatar/feedback-2.jpg',
        },
        {
            id: 3,
            name: 'Steve Rhodes',
            title: 'Developer',
            description: 'pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis.',
            quote: 'assets/img/icon/quote.png',
            avatar: 'assets/img/avatar/feedback-3.jpg',
        },
    ];
    return (
        <>
        <Header></Header>
            <div className="services__page section-padding">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-xl-6 col-lg-8">
                            <div className="services__page-title lg-t-center">
                                <span className="subtitle">Our Services</span>
                                <h2>Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {servicesData.map((item, id)=>(
                            <div className="col-xl-12" key={id}>
                                <div className="services__page-item">
                                    <div className="services__page-item-left">
                                        <div className="services__page-item-left-icon">
                                            <img src={item.imgOne} alt="" />
                                        <div className="services__area-item-icon-one">
                                            <img src={item.imgTwo} alt="" />
                                        </div>
                                        </div>
                                        <div className="services__page-item-left-content">
                                            <h4><Link to={item.href}>{item.title}</Link></h4>
                                        </div>
                                    </div>
                                    <div className="services__page-item-center">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="services__page-item-right">
                                        <Link to={item.href}><i className="fal fa-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Video bannerBg={bannerBg}></Video>
            <div className="feedback__area section-padding">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-xl-12">
                            <div className="feedback__area-title">
                                <span className="subtitle-one">Our Reviews</span>
                                <h2>Awesome client Feedback</h2>                         
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {feedbackData.map((item, id)=>(
                            <div className="col-xl-4 col-lg-6" key={id}>
                                <div className="feedback__area-item">
                                    <div className="feedback__area-item-quote">
                                        <img src={item.quote} alt="" />
                                    </div>
                                    <div className="feedback__area-item-reviews">
                                        <h5>Good :</h5>
                                        <ul>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="feedback__area-item-content">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="feedback__area-item-bottom">
                                        <div className="feedback__area-item-bottom-avatar">
                                            <img src={item.avatar} alt="" />
                                        </div>
                                        <div className="feedback__area-item-bottom-title">
                                            <h5>{item.name}</h5>
                                            <span>{item.title}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        <FooterThree></FooterThree>         
        </>
    );
};

export default ServicesPage;