import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="flex flex-row flex-wrap bg-sky-950 px-8 py-4 w-full">
            <div className="flex flex-row items-center justify-start">
                <p className="text-blue-300">Copyright &copy; 2025 - All rights reserved</p>
            </div>
            <div className="flex flex-row items-center justify-end">
                <FontAwesomeIcon className="text-blue-300 mr-4" icon={faInstagram} size="xl" />
                <FontAwesomeIcon className="text-blue-300 mr-4" icon={faFacebook} size="xl" />
                <FontAwesomeIcon className="text-blue-300 mr-4" icon={faTwitter} size="xl" />
                <FontAwesomeIcon className="text-blue-300" icon={faTiktok} size="xl" />
            </div>
        </footer>
    );
};

export default Footer;