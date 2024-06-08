import React from 'react';
import { Link } from 'react-router-dom';
import { pageTitle } from '../PageTitle';

const Error = () => {
    pageTitle('Error');
    return (
        <div className="error__page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="error__page-content">
                            <h1>404</h1>
                            <p>The page you are looking for does not exist!</p>
                            <Link className="theme-btn-1" to="/">go Back to Home page<i className="fal fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;