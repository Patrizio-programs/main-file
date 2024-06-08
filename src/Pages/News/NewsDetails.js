import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterThree';
import Header from '../Header/HeaderFour';
import { pageTitle } from '../PageTitle';
import NewsSideBar from './NewsSideBar';

const NewsDetails = () => {
    pageTitle('News Details');
    return (
        <>
        <Header></Header>        
        <div className="blog__details section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 lg-mb-30">
                        <div className="blog__details-left">
                            <img src="assets/img/blog-7.jpg" alt="" />
                            <div className="blog__details-left-meta">
                                <ul>
                                    <li><Link to="#"><i className="fal fa-user"></i>By - Admin</Link></li>
                                    <li><Link to="#"><i className="fal fa-calendar-alt"></i>07, March 2023</Link></li>
                                    <li><Link to="#"><i className="fal fa-comment-dots"></i>3 Comment</Link></li>
                                </ul>
                            </div>
                            <h3 className="mb-20">20 Beautiful Portfolios For Designers & Artists</h3>
                            <p>Maecenas tincidunt hendrerit odio sed consectetur. Duis porta purus sapien, eget pretium augue consectetur ut. Nunc nibh augue, pretium quis imperdiet pellentesque, molestie eget nisi. Sed rutrum sit amet eros ac egestas. Maecenas tincidunt dolor in massa iaculis, vitae dignissim sem finibus. Pellentesque elementum vel arcu sit amet rhoncus. Nulla at eleifend lorem. Praesent et ex sed metus egestas feugiat. Donec velit libero, feugiat ac dictum vel, dignissim id ante. Praesent hendrerit posuere condimentum. </p>
                            <div className="blog__details-left-box">
                                <div className="blog__details-left-box-icon">
                                    <img src="assets/img/icon/quote.png" alt="" />
                                </div>
                                <p>Design Solution is a simple and unique solution for business owners to design their online presence, establish their brand, and attract more customers to their website. It's free!</p>
                                <h6>David Beckham</h6>                                
                            </div>
                            <p>Vestibulum eget tellus rhoncus, dictum massa a, mattis massa. Cras in leo semper, ultricies ligula nec, ornare tellus. Suspendisse quam risus, semper et ultricies a, commodo eu tortor. Phasellus elementum tincidunt varius. Nam facilisis, ante eget gravida vestibulum, ante nisi feugiat nulla, in dapibus neque turpis et dolor. Vestibulum in urna urna.</p>
                            <div className="row mt-40 mb-40">
                                <div className="col-sm-6 sm-mb-30">
                                    <div className="blog__details-left-list">
                                        <img className="img__full" src="assets/img/details-1.jpg" alt="" />                                    
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="blog__details-left-list">
                                        <img className="img__full" src="assets/img/details-2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="mb-20">Experts.com helps you solve all your design-related problems. From logo design to website and app development, expert solutions are at your fingertips.</p>
                            <p>Design Solution is the place to find design solutions for your business or organization. We have hundreds of design solutions with everything from logos, themes, infographics and more for you to choose from.</p>
                            <div className="blog__details-left-related">
                                <div className="row align-items-center">
                                    <div className="col-md-7 md-mb-30">
                                        <div className="blog__details-left-related-tag">
                                            <h6>Tags :</h6>                                        
                                            <ul>
                                                <li><Link to="">Popular</Link></li>
                                                <li><Link to="">Design</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-5 t-right md-t-left">
                                        <div className="blog__details-left-related-share">
                                            <ul>
                                                <li><Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                                </li>
                                                <li><Link to="#"><i className="fab fa-twitter"></i></Link>
                                                </li>
                                                <li><Link to="#"><i className="fab fa-behance"></i></Link>
                                                </li>
                                                <li><Link to="#"><i className="fab fa-youtube"></i></Link>
                                                </li>
                                                <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details-left-post mb-55">
                                <div className="blog__details-left-post-author">
                                    <div className="blog__details-left-post-author-image">
                                        <img className="img__full" src="assets/img/avatar/author.png" alt="" />
                                    </div>
                                    <div className="blog__details-left-post-author-content">
                                        <h5>michelle monaghan</h5>
                                        <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius. Suspendisse sit amet molestie tellus</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details-left-comment mb-55">
                                <h3 className="mb-30">Comment (2)</h3>
                                <div className="blog__details-left-comment-item">
                                    <div className="blog__details-left-comment-item-comment">
                                        <div className="blog__details-left-comment-item-comment-image">
                                            <img src="assets/img/avatar/comment-1.jpg" alt="" />									
                                        </div>									
                                        <div className="blog__details-left-comment-item-comment-content">
                                            <h5>Justin Bieber<Link to="#"><i className="fal fa-reply"></i>Reply</Link></h5>
                                            <span>20 May, 2023  At 9:PM</span>
                                            <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__details-left-comment-item ml-80">
                                    <div className="blog__details-left-comment-item-comment">
                                        <div className="blog__details-left-comment-item-comment-image">
                                            <img src="assets/img/avatar/comment-2.jpg" alt="" />									
                                        </div>									
                                        <div className="blog__details-left-comment-item-comment-content">
                                            <h5>Camila Cabello<Link to="#"><i className="fal fa-reply"></i>Reply</Link></h5>
                                            <span>22 May, 2023  At 7:PM</span>
                                            <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details-left-contact">
                                <h3 className="mb-30">Add Comment</h3>
                                <div className="blog__details-left-contact-form">
                                    <form action="#">	
                                        <div className="row">
                                            <div className="col-sm-6 mb-30"> 
                                                <div className="blog__details-left-contact-form-item">
                                                    <i className="fal fa-user"></i>
                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                </div>										
                                            </div>
                                            <div className="col-sm-6 sm-mb-30">
                                                <div className="blog__details-left-contact-form-item">
                                                    <i className="fal fa-envelope"></i>
                                                    <input type="email" name="email" placeholder="Email Address" required />											
                                                </div>									
                                            </div>
                                            <div className="col-sm-12 mb-30"> 
                                                <div className="blog__details-left-contact-form-item">
                                                    <i className="fal fa-globe"></i>
                                                    <input type="text" name="subject" placeholder="https://" required />
                                                </div>										
                                            </div>
                                            <div className="col-sm-12 mb-30"> 
                                                <div className="blog__details-left-contact-form-item">
                                                    <i className="fal fa-pen"></i>
                                                    <textarea name="message" placeholder="Type your comments...."></textarea>
                                                </div>										
                                            </div>
                                            <div className="col-lg-12">										
                                                <div className="blog__details-left-contact-form-item">
                                                    <button className="theme-btn-1" type="submit">Submit Now<i className="fal fa-long-arrow-right"></i></button>
                                                </div>										
                                            </div>
                                        </div>							
                                    </form>	
                                </div>						
                            </div>
                        </div>
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

export default NewsDetails;