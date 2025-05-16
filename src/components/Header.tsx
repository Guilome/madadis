import Navigation from "./Navigation.tsx";
import Search from "./Search.tsx";
import logo from "../assets/Logo-v2.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";

const Header = () => {
    return (
        <header className="flex justify-center items-center w-full p-2 bg-sky-950">
            <div className="flex flex-row justify-start items-center w-1/2">
                <div className="bg-sky-50 rounded-full p-4 m-4">
                    <img className="h-[100px] w-[100px]" src={logo} alt="logo"/>
                </div>
                <Navigation />
            </div>

            <div className="flex flex-row justify-end items-center w-1/2">
                <Search />
                <FontAwesomeIcon className="text-sky-500 text-2xl m-4" icon={faCartShopping} />
                <FontAwesomeIcon className="text-sky-500 text-2xl m-4" icon={faUser} />
            </div>
        </header>
    );
};

export default Header;