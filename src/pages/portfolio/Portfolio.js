import './portfolio.css';
import { Link } from 'react-router-dom';
import { portfolio } from "../../data/data";
import { Slider } from '../../components/slider/Slider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
    return (
        <>
            <div className='portfolioTitle'>
                <Link to="/">
                    <FontAwesomeIcon icon={faArrowLeftLong} className='arrowContact'/>
                </Link>
                <h1 className='portfolioH1'>Portfolio</h1>
                <FontAwesomeIcon icon={faArrowRightLong} className='arrowContactRight' />
            </div>
            <div className='portfolioH2'>
                <div>
                    <h2 className='projectH2'>Job Project</h2>
                    <a href="https://github.com/tatiana-sthl" target='_blank' rel="noreferrer" className="detailPortfolio">
                        <span className='spanDetailPortfolio'>Pour en savoir plus</span>
                    </a>
                    <Slider items={portfolio[0].review} />
                </div>
                <div>
                    <h2 className='projectH2'>School Project</h2>
                    <a href="https://github.com/tatiana-sthl" target='_blank' rel="noreferrer" className="detailPortfolio">
                        <span className='spanDetailPortfolio'>Pour en savoir plus</span>
                    </a>
                    <Slider items={portfolio[1].review} />
                </div>
                <div>
                    <h2 className='projectH2'>Side Project</h2>
                    <a href="https://github.com/tatiana-sthl" target='_blank' rel="noreferrer" className="detailPortfolio">
                        <span className='spanDetailPortfolio'>Pour en savoir plus</span>
                    </a>
                    <Slider items={portfolio[2].review} />
                </div>
            </div>
        </>
    );
}

export default Portfolio;