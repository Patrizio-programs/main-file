import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import ReactSkillBar from 'react-skillbars';

const SkillArea = () => {
    const [skillBar, setSkillBar] = useState(false);
    const development = [
        { type: 'Development', level: 102 }
    ];
    const designing = [
        { type: 'Designing', level: 115 }
    ];
    const marketing = [
        { type: 'Marketing', level: 89 }
    ];
    return (
        <div className="skill__area-two-right">
        <ScrollTrigger onEnter={()=> setSkillBar(true)} onExit={()=> setSkillBar(false)}>
                <div className="skill__area-two-right-skill">
                    <div className="skill__area-two-right-skill-item">
                        <div className="skill__area-two-right-skill-item-content">
                            <h6>Development</h6> 
                            <div className="skill__area-two-right-skill-item-count">
                                <>{skillBar && <CountUp start={0} end={80} duration={4} delay={0}></CountUp>}%</>
                            </div>
                        </div>
                        <div className="skill__area-two-right-skill-item-bar">
                            {skillBar && <ReactSkillBar skills={development} height={4} animationDuration={2500} />}
                        </div>
                    </div>
                    <div className="skill__area-two-right-skill-item mt-30">
                        <div className="skill__area-two-right-skill-item-content">
                            <h6>Designing</h6> 
                            <div className="skill__area-two-right-skill-item-count">
                                <>{skillBar && <CountUp start={0} end={90} duration={4} delay={0}></CountUp>}%</>
                            </div>
                        </div>
                        <div className="skill__area-two-right-skill-item-bar">
                            {skillBar && <ReactSkillBar skills={designing} height={4} animationDuration={2500} />}
                        </div>
                    </div>
                    <div className="skill__area-two-right-skill-item mt-30">
                        <div className="skill__area-two-right-skill-item-content">
                            <h6>Marketing</h6> 
                            <div className="skill__area-two-right-skill-item-count">
                                <>{skillBar && <CountUp start={0} end={70} duration={4} delay={0}></CountUp>}%</>
                            </div>
                        </div>
                        <div className="skill__area-two-right-skill-item-bar">
                            {skillBar && <ReactSkillBar skills={marketing} height={4} animationDuration={2500} />}
                        </div>
                    </div>
                </div>
        </ScrollTrigger>        
        </div>
    );
};

export default SkillArea;