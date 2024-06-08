import React from 'react';
import FooterThree from '../../Footer/FooterThree';
import HeaderThree from '../../Header/HeaderThree';
import { pageTitle } from '../../PageTitle';
import PortfolioFilter from '../../Portfolio/PortfolioFilter';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Skill from '../Skill/Skill';

const HomeThree = () => {
    pageTitle('Metier');
    return (
        <>
        <HeaderThree></HeaderThree>            
        <Banner></Banner>
        <Skill></Skill>
        <PortfolioFilter></PortfolioFilter>
        <Reviews></Reviews>
        <Contact></Contact>
        <FooterThree></FooterThree>
        </>
    );
};

export default HomeThree;