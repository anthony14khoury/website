import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
    return (		
        <div className='home-container'>

            <div className='home-title'> <p>Hi, my name is Anthony Khoury</p> </div>
            <div className='home-details'>
                <p>I'm a Senior Computer Engineering student at the University of Florida</p>
                <p>I'm currently working as a Cloud Engineering Intern at VMware</p>
            </div>

            <div className='home-contact'>
                <p>Let's get connected</p>
                <div className='home-links'>
                    <FontAwesomeIcon className='home-icon' icon="fa-solid fa-envelope" />
                    <FontAwesomeIcon className='home-icon' icon="fab fa-linkedin" />
                    <FontAwesomeIcon className='home-icon' icon="fa-brands fa-github" />
                    <FontAwesomeIcon className='home-icon' icon="fa-brands fa-instagram" />
                </div>
            </div>
        </div>
    );
}