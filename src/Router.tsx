import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.tsx";
import Produits from "./pages/Produits.tsx";
import Navigation from "./Navigation.tsx";
import Categories from "./pages/Categories.tsx";
import Panier from "./pages/Panier.tsx";
import Contact from "./pages/Contact.tsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produits" element={<Produits />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/panier" element={<Panier />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;