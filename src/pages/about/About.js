import './about.css';
import postmanicon from "../../img/postman.png";
import mongodbicon from "../../img/mongodb.png";
import vscicon from "../../img/vscicon.png";

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaBootstrap, FaFigma, FaWordpress } from "react-icons/fa";

function About() {
    return (
        <>
            <div className='portfolioTitle'>
                <Link to="/">
                    <FontAwesomeIcon icon={faArrowLeftLong} className='arrowPortfolio'/>
                </Link>
                <h1 className='portfolioH1'>Qui suis-je ?</h1>
                <FontAwesomeIcon icon={faArrowRightLong} className='arrowPortfolioRight' />
            </div>
            <div className='aboutme'>
                <p>Une jeune femme d'actuellement 29 ans, qui a suivi des études pour travailler dans le milieu de l'agriculture, puis des études pour travailler dans le milieu de la culture, qui a fait un service civique pour l'UNICEF, puis qui a travaillé dans deux musées et deux bibliothèques.</p>
                <p>Et après moults aventures, décide en août 2021 d'apprendre à coder, comprend que cela lui plaît beaucoup, et veut en faire son métier. Je me passionne pour le trio HTML/CSS/Javascript avec son lot de framework tels que React ou Bootstrap, que j'apprends à dompter petit à petit.</p>
            </div>
            
            <h2 className='aboutH2'>Stack</h2>
            <div className='stack'>
                <ul className='ulAbout' data-alt='HTML5'>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><FaHtml5 className='iconStack'/> </span>
                    </li>
                </ul>
                <ul className='ulAbout' data-alt='CSS3'>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><FaCss3Alt className='iconStack'/> </span>
                    </li>
                </ul>
                <ul className='ulAbout' data-alt='JavaScript'>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><FaJs className='iconStack'/> </span>
                    </li>
                </ul>
                <ul className='ulAbout' data-alt='PHP'>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><FaPhp className='iconStack'/> </span>
                    </li>
                </ul>
                <ul className='ulAbout' data-alt='Bootstrap'>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><FaBootstrap className='iconStack'/> </span>
                    </li>
                </ul>
                <ul className='ulAbout' data-alt='Figma'>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><FaFigma className='iconStack'/> </span>
                    </li>
                </ul>
                <ul className='ulAbout' data-alt='Wordpress'>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><FaWordpress className='iconStack'/> </span>
                    </li>
                </ul>
                <ul className='ulAbout' data-alt='React'>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><FaReact className='iconStack'/> </span>
                    </li>
                </ul>
                <ul className='ulAbout' data-alt='Postman'>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><img src={postmanicon} alt="" className='iconStack'/></span>
                    </li>
                </ul> 
                <ul className='ulAbout' data-alt='MongoDB'>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><img src={mongodbicon} alt="" className='iconStack'/></span>
                    </li>
                </ul>
                <ul className='ulAbout' data-alt='VSC'>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><img src={vscicon} alt="" className='iconStack'/></span>
                    </li>
                </ul>
            </div>
        </>
    );

}

export default About;