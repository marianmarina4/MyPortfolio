import './IntroductionStyle.css'
import avatarImg from '../../../public/Avatar/MyAvatar.jpg'

export function Introduction() {
    return (
        <section className='introduction-main'>
            <img className='introduction-image' alt="Mariano Marina"
                src={avatarImg} />
            <div className='introduction-header'>
                <h1 id='Introduction' className='introduction-title'>
                    Mariano Marina
                </h1>
                <p className='introduction-description'>
                    <span>Estudiante de Licenciatura en Informática.</span> <br />
                </p>
                <p className='introduction-description'>
                    Futuro desarrollador web full stack.
                </p>
                <p className='introduction-description'>
                    Viedma, Argentina.
                </p>
            </div>
        </section>
    )
}