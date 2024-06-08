import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Work = () => {
    return (
        <div className="work__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="work__area-title lg-t-center"> 
                            <span className="subtitle one">How IT Work</span>
                            <h2>Simple Work Process</h2> 
                        </div>
                    </div>
                </div>
                <div className="row mb-110">
                    <div className="col-xl-4 col-lg-4 col-md-6 pr-110 lg-mb-30">
                        <div className="work__area-item"> <span>01</span>
                            <div className="work__area-item-icon"> <img src="assets/img/icon/work-1.png" alt="" /> </div>
                            <div className="work__area-item-content">
                                <h4>Concept Creation</h4>
                                <p>pellentesque in dolor vel malesuada. Donec finibus libero odio</p>
                            </div>
                            <div className="work__area-item-shape"> <img src="assets/img/icon/shape-1.png" alt="" /> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 pl-55 pr-55 md-mb-30">
                        <div className="work__area-item"> <span>02</span>
                            <div className="work__area-item-icon"> <img src="assets/img/icon/work-2.png" alt="" /> </div>
                            <div className="work__area-item-content">
                                <h4>Sketch Drawing</h4>
                                <p>pellentesque in dolor vel malesuada. Donec finibus libero odio</p>
                            </div>
                            <div className="work__area-item-shape"> <img src="assets/img/icon/shape-2.png" alt="" /> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 pl-110">
                        <div className="work__area-item"> <span>03</span>
                            <div className="work__area-item-icon"> <img src="assets/img/icon/work-3.png" alt="" /> </div>
                            <div className="work__area-item-content">
                                <h4>Final Design</h4>
                                <p>pellentesque in dolor vel malesuada. Donec finibus libero odio</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="faq">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className="faq-item">
                                    <Accordion.Header className="faq-item-card-header"><h5>What are the acceptable formats for the portfolio?</h5></Accordion.Header>
                                    <Accordion.Body className='faq-item-card-header-content'><p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis. Curabitur a tincidunt risus, non gravida ipsum. Sed at ligula porta, dictum magna id, molestie mi. Mauris et ligula dui. Aliquam erat volutpat. Nam pharetra, risus vitae bibendum pellentesque, dui metus convallis felis, non semper leo leo nec augue. Maecenas vestibulum ornare iaculis. Integer elit arcu, lobortis id felis eu, scelerisque maximus libero.</p></Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="faq-item">
                                    <Accordion.Header className="faq-item-card-header"><h5>Protect Your Business with Insurance?</h5></Accordion.Header>
                                    <Accordion.Body className='faq-item-card-header-content'><p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis. Curabitur a tincidunt risus, non gravida ipsum. Sed at ligula porta, dictum magna id, molestie mi. Mauris et ligula dui. Aliquam erat volutpat. Nam pharetra, risus vitae bibendum pellentesque, dui metus convallis felis, non semper leo leo nec augue. Maecenas vestibulum ornare iaculis. Integer elit arcu, lobortis id felis eu, scelerisque maximus libero.</p></Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="faq-item">
                                    <Accordion.Header className="faq-item-card-header"><h5>Open A Business Bank Account?</h5></Accordion.Header>
                                    <Accordion.Body className='faq-item-card-header-content'><p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis. Curabitur a tincidunt risus, non gravida ipsum. Sed at ligula porta, dictum magna id, molestie mi. Mauris et ligula dui. Aliquam erat volutpat. Nam pharetra, risus vitae bibendum pellentesque, dui metus convallis felis, non semper leo leo nec augue. Maecenas vestibulum ornare iaculis. Integer elit arcu, lobortis id felis eu, scelerisque maximus libero.</p></Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;