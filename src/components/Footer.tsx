import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="flex bg-sky-950 px-8 py-4">
            <p className="text-blue-300 w-1/2">Copyright &copy; 2025 - All rights reserved</p>
            <div className="flex items-cneter justify-end w-1/2">
                <FontAwesomeIcon className="text-blue-300 mr-4" icon={faInstagram} size="xl" />
                <FontAwesomeIcon className="text-blue-300 mr-4" icon={faFacebook} size="xl" />
                <FontAwesomeIcon className="text-blue-300 mr-4" icon={faTwitter} size="xl" />
                <FontAwesomeIcon className="text-blue-300" icon={faTiktok} size="xl" />
            </div>
        </footer>
    );
};

export default Footer;