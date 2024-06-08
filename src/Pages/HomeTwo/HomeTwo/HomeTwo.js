import React from 'react';
import FooterTow from '../../Footer/FooterTow';
import HeaderTwo from '../../Header/HeaderTwo';
import { pageTitle } from '../../PageTitle';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Features from '../Features/Features';
import Portfolio from '../Portfolio/Portfolio';
import Skill from '../Skill/Skill';
import Sponsors from '../Sponsors/Sponsors';

const HomeTwo = () => {
    pageTitle('Metier');
    return (
        <>
            <HeaderTwo></HeaderTwo>
            <Banner></Banner>
            <Features></Features>
            <Portfolio></Portfolio>
            <Skill></Skill>
            <Sponsors></Sponsors>
            <Blog></Blog>
            <FooterTow></FooterTow>
        </>
    );
};

export default HomeTwo;