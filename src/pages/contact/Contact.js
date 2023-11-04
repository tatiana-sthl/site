import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { Link } from 'react-router-dom';


function Contact() {
    return (
        <>
            <div className='contactTitle'>
                <Link to="/">
                    <FontAwesomeIcon icon={faArrowLeftLong} className='arrowContact'/>
                </Link>
                <h1>Contact</h1>
                <FontAwesomeIcon icon={faArrowRightLong} className='arrowContactRight' />
            </div>
            <div className='contactMedia'>
                <ul className='contactUl'> 
                    <li className='contactLi'>
                        <a rel="noreferrer" target='_blank' className='aContact one' href='mailto:stahli.tatiana@gmail.com' >
                            <FontAwesomeIcon icon={faEnvelope} className='iconContact'/>
                        </a>
                    </li>
                    <li className='contactLi'>
                        <a rel="noreferrer" target='_blank' className='aContact two' href='https://github.com/tatiana-sthl'>
                            <FaGithub className='iconContact'/> 
                        </a>
                    </li>
                    <li className='contactLi'>
                        <a rel="noreferrer" target='_blank'className='aContact three' href='https://www.linkedin.com/in/tatiana-stahli/'>
                            <FaLinkedin className='iconContact'/>
                        </a>
                    </li>
                    <li className='contactLi'>
                        <a rel="noreferrer" target='_blank' className='aContact four' href='https://twitter.com/thathidev'>
                            <FaTwitter className='iconContact'/>
                        </a>
                    </li>
                </ul>

            </div>
        </>
    );

}

export default Contact;