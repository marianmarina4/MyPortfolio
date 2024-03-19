import './SkillsStyle.css';
import { SkillCard } from './SkillCard/SkillCard.jsx';

export function Skills(props) {

    const {
        title,
        skillCard
    } = props;

    return (
        <div className='skills-main'>
            <h2 className='skills-description'>{title}</h2>
            <div className='skills-box'>
                {skillCard.map((skillData, index) => (
                    <SkillCard
                        key={index}
                        nameSkill={skillData.nameSkill}
                        assetName={skillData.assetName}
                    />
                ))}
            </div>
        </div>
    );
}
