import './NavbarStyle.css'
import { useState } from 'react';

export function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <nav>
            <div className={`icon-open ${isOpen ? 'hidden' : ''}`} onClick={toggleNavbar}>
                <svg className={isOpen ? 'open' : ''} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <ul className={isOpen ? 'open' : ''}>
                <div className='navbar-background'>
                    <li className='icon-close'>
                        <svg onClick={toggleNavbar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </li>
                    <li>
                        <a id='left' href='#Introduction'>Introducción</a>
                    </li>
                    <li>
                        <a href='#Projects'>Proyectos</a>
                    </li>
                    <li>
                        <a href='#Skills'>Skills</a>
                    </li>
                    <li>
                        <a id='right' href='#AboutMe'>Sobre mí</a>
                    </li>
                </div>
            </ul>
        </nav >
    )
}