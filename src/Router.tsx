import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.tsx";
import Produits from "./pages/Produits.tsx";
import Categories from "./pages/Categories.tsx";
import Panier from "./pages/Panier.tsx";
import Contact from "./pages/Contact.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import DetailProduit from "./pages/DetailProduit.tsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produits" element={<Produits />} />
                <Route path="/produit?id" element={<DetailProduit />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/panier" element={<Panier />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter;