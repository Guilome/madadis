import { Link } from "react-router-dom";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);
    return (
            <nav>
                <div className="mx-auto py-3 flex items-center justify-between">
                    <div className="lg:hidden">
                        {!isOpen && (
                            <button className="flex flex-col justify-center items-center w-8 h-8" onClick={toggleMenu}>
                                <FontAwesomeIcon className="text-sky-50 text-4xl" icon={faBars} />
                            </button>
                        )}
                        {isOpen && (
                            <button className="flex flex-col justify-center items-center w-8 h-8" onClick={toggleMenu}>
                                <FontAwesomeIcon className="text-sky-50 text-4xl" icon={faXmark} />
                            </button>
                        )}
                    </div>
                    <ul className="list-none flex font-poppins max-lg:hidden">
                        <li className="mr-8 text-blue-50">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li className="mr-8 text-blue-50">
                            <Link to="/produits">Produits</Link>
                        </li>
                        <li className="mr-8 text-blue-50">
                            <Link to="/categories">Categories</Link>
                        </li>
                        <li className="mr-8 text-blue-50">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                {isOpen && (
                    <div className="lg:hidden bg-sky-950 flex flex-col items-start px-6 py-4 space-y-4">
                        <Link to="/" onClick={closeMenu} className="w-full text-sky-50 hover:text-blue-500">Accueil</Link>
                        <Link to="/produits" onClick={closeMenu} className="w-full text-sky-50 hover:text-blue-500">Produits</Link>
                        <Link to="/categories" onClick={closeMenu} className="w-full text-sky-50 hover:text-blue-500">Categories</Link>
                        <Link to="/contact" onClick={closeMenu} className="w-full text-sky-50 hover:text-blue-500">Contact</Link>
                    </div>
                )}
            </nav>
    )
};

export default Navigation;