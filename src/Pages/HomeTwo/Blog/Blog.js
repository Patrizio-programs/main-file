import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const blogData = [
      {
        id: 1,
        title: '20 Beautiful Portfolios For Designers & Artists',
        date: '05 Feb, 2023',
        image: 'assets/img/blog-1.jpg',
        comment: '4 Comment',
        href: '/news-details',
      },
      {
        id: 2,
        title: 'The Best Way to Build Your Portfolio',
        date: '03 Feb, 2023',
        image: 'assets/img/blog-2.jpg',
        comment: '2 Comment',
        href: '/news-details',
      },
      {
        id: 3,
        title: 'Get Your Portfolio Ready in 15 Minutes',
        date: '01 Feb, 2023',
        comment: '3 Comment',
        image: 'assets/img/blog-3.jpg',
        href: '/news-details',
      }
    ];
    return (
        <div className="blog__area section-padding">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-xl-12">
                        <div className="blog__area-title"> 
                            <span className="subtitle-one">News & Blog</span>
                            <h2>News & Insights</h2> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogData.map((item, id)=>(
                        <div className="col-xl-4 col-lg-4 col-md-6 mt-30" key={id}>
                            <div className="blog__area-item">
                                <div className="blog__area-item-image">
                                    <Link to={item.href}><img src={item.image} alt="" /></Link>
                                </div>
                                <div className="blog__area-item-content">
                                    <div className="blog__area-item-content-meta">
                                        <ul>
                                            <li><Link to="#"><i className="fal fa-calendar-alt"></i>{item.date}</Link></li>
                                            <li><Link to="#"><i className="fal fa-comments"></i>{item.comment}</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to={item.href}>{item.title}</Link></h4> 
                                    <Link className="simple-btn" to={item.href}>Read More<i className="far fa-long-arrow-right"></i></Link> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;