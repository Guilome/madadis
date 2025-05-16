import { Link } from "react-router-dom";

const Navigation = () => {
    return (
            <nav>
                <ul className="list-none flex font-poppins">
                    <li className="mr-8 text-blue-50">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-8 text-blue-50">
                        <Link to="/produits">Produits</Link>
                    </li>
                    <li className="mr-8 text-blue-50">
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li className="mr-8 text-blue-50">
                        <Link to="/panier">Panier</Link>
                    </li>
                    <li className="mr-8 text-blue-50">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
    )
};

export default Navigation;