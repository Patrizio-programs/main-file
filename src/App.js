import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import HomeOne from "./Pages/HomeOne/HomeOne/HomeOne";

import NewsDetails from './Pages/News/NewsDetails';
import NewsStandard from './Pages/News/NewsStandard';
import PortfolioDetails from './Pages/Portfolio/PortfolioDetails';
import Preloader from './Pages/Preloader/Preloader';
import ScrollTop from "./Pages/ScrollTop/ScrollTop";
import ServicesDetails from './Pages/Services/ServicesDetails';
import ServicesPage from './Pages/Services/ServicesPage';
import Test from './Pages/Test/Test';
function App() {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, []);

    return (
        <>
            {loader && <Preloader />}
            <Router><Routes>
                <Route path="/" element={<HomeOne />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services-details" element={<ServicesDetails />} />
    
                <Route path="/portfolio-details" element={<PortfolioDetails />} />
                <Route path="/news" element={<NewsStandard />} />
                <Route path="/news-details" element={<NewsDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/test" element={<Test />} />

                
                <Route path="*" element={<Error />} />
            </Routes></Router>
            <ScrollTop />
        </>
    )
}

export default App;
