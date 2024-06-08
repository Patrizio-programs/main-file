import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Home = () => (
    <Fragment>
        <li><Link to="/">Home 01</Link></li>
        <li><Link to="/home-two">Home 02</Link></li>
        <li><Link to="/home-three">Home 03</Link></li>
    </Fragment>
);
export const Page = () => (
    <Fragment>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/services-details">Services Details</Link></li>
    </Fragment>
);
export const Portfolio = () => (
    <Fragment>
    <li><Link to="/portfolio">Portfolio 01</Link></li>
    <li><Link to="/portfolio-two">Portfolio 02</Link></li>
    <li><Link to="/portfolio-three">Portfolio 03</Link></li>
    <li><Link to="/portfolio-details">Portfolio Details 01</Link></li>
    <li><Link to="/portfolio-details-two">Portfolio Details 02</Link></li>
    </Fragment>
);
export const News = () => (
    <Fragment>
    <li><Link to="/news">News</Link></li>
    <li><Link to="/news-details">News Details</Link></li>
    </Fragment>
);
