import React from 'react';
import FooterThree from '../Footer/FooterThree';
import Header from '../Header/HeaderFour';
import { pageTitle } from '../PageTitle';
import PortfolioFilter from './PortfolioFilter';

const Counter = () => {
    pageTitle('Portfolio Three');
    return (
        <>
        <Header></Header>
        <PortfolioFilter></PortfolioFilter>
        <FooterThree></FooterThree> 
        </>
    )
}

export default Counter;