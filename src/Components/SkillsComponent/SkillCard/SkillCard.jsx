import './SkillsCardStyle.css'

export function SkillCard({ assetName, nameSkill }) {
    return (
        <div className='skillcard-main'>
            <div className='skillcard-imageBox'>
                <img
                    alt='Tech Image'
                    src={`../../../public/TechIcons/${assetName}.png`} />
            </div>
            <h3 className='skillcard-text'>
                {nameSkill}
            </h3>
        </div>
    )
}