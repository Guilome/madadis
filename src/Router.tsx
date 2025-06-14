import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.tsx";
import Produits from "./pages/Produits.tsx";
import Categories from "./pages/Categories.tsx";
import Panier from "./pages/Panier.tsx";
import Contact from "./pages/Contact.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import FicheProduit from "./pages/FicheProduit.tsx";

function AppRouter() {
    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter>
                <Header/>
                <div className="flex justify-center items-center flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/produits" element={<Produits />} />
                        <Route path="/produits/:category" element={<Produits />} />
                        <Route path="/produit/:id" element={<FicheProduit />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/panier" element={<Panier />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;