import Navigation from "./Navigation.tsx";
import Search from "./Search.tsx";
import logo from "../assets/Logo-v2.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {useCart} from "../services/CartContext.tsx";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const { cart } = useCart();

    const goToCart = () => {
        navigate(`/panier`)
    }

    return (
        <header className="bg-sky-950 min-w-screen">
            <div className="flex justify-center items-center w-full p-2">
                <div className="flex flex-row justify-start items-center w-1/2">
                    <div className="bg-sky-50 rounded-full p-2 m-4 min-h-12 min-w-12 max-h-24 max-w-24">
                        <img className="h-fit w-fit min-h-6 min-w-6" src={logo} alt="logo"/>
                    </div>
                    <Navigation />
                </div>

                <div className="flex flex-row justify-end items-center w-1/2">
                    <div className="max-sm:hidden">
                        <Search />
                    </div>
                    <div className="h-6 w-6 m-4 relative hover:cursor-pointer" onClick={goToCart}>
                        <FontAwesomeIcon className="text-sky-500 text-2xl" icon={faCartShopping}/>
                        {cart.length > 0 && (
                            <span className="absolute -top-3 -right-3 bg-sky-50 text-sky-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className="sm:hidden w-full flex justify-center items-center">
                <Search />
            </div>
        </header>
    );
};

export default Header;