import './AboutMeStyle.css'

export function AboutMe() {
    return (
        <div className='aboutme-main'>
            <h2 id='AboutMe' className='aboutme-title'>
                <svg className='aboutme-svg'
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                Sobre mí
            </h2>
            <p className='aboutme-description'>
                Mi nombre es Mariano Marina y tengo 24 años. Me introduje en el mundo de la programación gracias a mi pasión por la computadora.<br /> Actualmente estoy estudiando Licenciatura en informática y soy deportista profesional.
            </p>
        </div>
    )
}