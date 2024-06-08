import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterThree';
import Header from '../Header/HeaderFour';
import { pageTitle } from '../PageTitle';
import NewsPagination from './NewsPagination';
import NewsSideBar from './NewsSideBar';

const NewsStandard = () => {
    pageTitle('News');
    const newsData = [
        {
            id: 1,
            date: '07 Feb, 2023',
            comment: '2 Comment',
            title: '20 Beautiful Portfolios For Designers & Artists',
            description: 'Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius. Suspendisse sit amet molestie tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            image: 'assets/img/blog-4.jpg',
            href: '/news-details',
        },
        {
            id: 2,
            date: '05 Feb, 2023',
            comment: '3 Comment',
            title: 'The Best Way to Build Your Portfolio',
            description: 'Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius. Suspendisse sit amet molestie tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            image: 'assets/img/blog-5.jpg',
            href: '/news-details',
        },
        {
            id: 3,
            date: '04 Feb, 2023',
            comment: '1 Comment',
            title: 'Artistic mind will be great for creation',
            description: 'Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius. Suspendisse sit amet molestie tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            image: 'assets/img/blog-6.jpg',
            href: '/news-details',
        },
        {
            id: 4,
            date: '02 Feb, 2023',
            comment: '4 Comment',
            title: 'Get Your Portfolio Ready in 15 Minutes',
            description: 'Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius. Suspendisse sit amet molestie tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            image: 'assets/img/blog-7.jpg',
            href: '/news-details',
        },
    ];
    return (
        <>
        <Header></Header>
        <div className="blog__standard section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 lg-mb-30">
                        {newsData.map((item, id)=>(
                        <div className="blog__standard-item" key={id}>                        
                            <div className="blog__standard-item-image">
                                <Link to={item.href}><img src={item.image} alt="" /></Link>
                            </div>
                            <div className="blog__standard-item-meta">
                                <ul>
                                    <li><Link to="#"><i className="far fa-calendar-alt"></i>{item.date}</Link></li>
                                    <li><Link to="#"><i className="far fa-comments"></i>{item.comment}</Link></li>
                                </ul>
                            </div>
                            <div className="blog__standard-item-content">
                                <h3><Link to={item.href}>{item.title}</Link></h3>
                                <p>{item.description}</p>
                                <Link className="simple-btn mt-35" to={item.href}>Discover More<i className="far fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        ))}
                        <NewsPagination></NewsPagination>
                    </div>                
                    <div className="col-xl-4 col-lg-4">
                        <NewsSideBar></NewsSideBar>
                    </div>
                </div>
            </div>
        </div>
        <FooterThree></FooterThree>
        </>
    );
};

export default NewsStandard;