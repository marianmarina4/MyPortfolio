import './App.css'
import { Introduction } from '../Components/IntroductionComponent/Introduction.jsx'
import { Projects } from '../Components/ProjectsComponent/Projects.jsx'
import { AboutMe } from '../Components/AboutMeComponent/AboutMe.jsx'
import { Skills } from '../Components/SkillsComponent/Skills.jsx'
import { Navbar } from '../Components/NavbarComponent/Navbar.jsx'

export function App() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el))

    const dataSkill = [
        {
            title: 'Frontend',
            skillCard: [
                {
                    nameSkill: 'HTML',
                    assetName: 'HTML5',
                },
                {
                    nameSkill: 'CSS',
                    assetName: 'CSS3',
                },
                {
                    nameSkill: 'ReactJS',
                    assetName: 'React',
                },
                {
                    nameSkill: 'JavaScript',
                    assetName: 'JavaScript',
                }
            ]
        },
        {
            title: 'Herramientas',
            skillCard: [
                {
                    nameSkill: 'Git',
                    assetName: 'Git',
                },
                {
                    nameSkill: 'GitHub',
                    assetName: 'GitHub',
                },
                {
                    nameSkill: 'VSCode',
                    assetName: 'VisualStudioCode',
                },
                {
                    nameSkill: 'ViteJS',
                    assetName: 'Vite.js',
                }
            ]
        }
    ]

    const dataProject = {
        projectCard:
            [
                {
                    projectName: 'Trello',
                    description: 'xd',
                    projectImage: 'https://images.ctfassets.net/rz1oowkt5gyp/4kCNudjaBYj90CGgG7Lict/cbafa67336b2007278f50d99ceabfb22/Boards_2x.png',
                    altImage: 'Trello Project Image'
                },
                {
                    projectName: 'Ecommerce',
                    description: 'Lorem',
                    projectImage: 'https://www.iebschool.com/blog/wp-content/uploads/2019/07/plan-de-marketing.jpg',
                    altImage: 'Ecommerce Project Image'
                },
                {
                    projectName: 'PathFinder',
                    description: 'Lorem',
                    projectImage: 'https://miro.medium.com/v2/resize:fit:1400/0*NbEqlPSrS_w5w51H.png',
                    altImage: 'PathFinder Project Image'
                }
            ]
    }

    return (
        <div className='app-main'>
            <Navbar />
            <Introduction />
            <Projects
                projectCard={dataProject.projectCard}
            />
            <h3 className='skills-title'>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8.7 8.7c1.1-1 2.2-2 3.3-2.7m0 0c3.1-2 6-2.6 7.4-1.3 1.8 1.8 0 6.6-4 10.7-4.1 4-8.9 5.8-10.7 4C3.4 18 4 15.2 6 12m6-6C9 4 6 3.3 4.7 4.6c-1.8 1.8 0 6.6 4 10.7M12 6c1.2.7 2.3 1.7 3.4 2.7m2.7 3.4c2 3 2.6 6 1.3 7.3C18 20.7 15 20 12 18m2-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
                Skills
            </h3>
            <div className='skills-section'>
                {dataSkill.map((skill, index) => (
                    <Skills
                        key={index}
                        title={skill.title}
                        skillCard={skill.skillCard}
                    />
                ))}
            </div>
            <AboutMe />
        </div >
    )
}