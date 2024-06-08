import React from 'react';
import SkillArea from './SkillArea';

const Skill = () => {
    return (
        <div className="skill__area-two">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-xl-7 col-lg-7 lg-mb-30">
					<div className="skill__area-two-left"> <span>My Skills</span> <img src="assets/img/skills.png" alt="" /> </div>
				</div>
				<div className="col-xl-5 col-lg-5">
					<SkillArea></SkillArea>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Skill;