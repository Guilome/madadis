
import main_image from "../assets/e-commerce_main.png";
import nouvelle_arrivee from "../assets/nouvelle-arrivee.png";
import sales from "../assets/sales.jpg";
import {useEffect, useState} from "react";
import type {Product} from "../services/type.ts";
import apiService from "../services/serviceAPI.ts";
import Carousel from "../components/Carousel.tsx";
import Spinner from "../components/Spinner.tsx";
import VignetteProduit from "../components/VignetteProduit.tsx";

function Home() {

    const [listProducts, setProducts] = useState<Product[]>();
    const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
    const [error, setError] = useState<Error>();

    useEffect(() => {
        setStatus('pending');
        apiService.productService.getAllProducts(6)
            .then((response: any) => {
                setProducts(response.products);
                setStatus('success');
            })
            .catch((e: any) => {
                setStatus('error');
                setError(e);
            });
    }, []);

    const carouselImage = [main_image, nouvelle_arrivee, sales];
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center w-full h-2/3 my-12">
                <Carousel slides={carouselImage} />
            </div>
            <h1 className="text-sky-500 text-8xl m-6 p-2">Nos produits les plus populaires</h1>
            {status === 'error' && (
                <div className="flex justify-center items-center mt-12">
                    <h1 className="text-2xl text-red-700">Error ! {error?.message}</h1>
                </div>
            )}
            {status === 'pending' && (
                <div className="flex justify-center items-center mt-12">
                    <Spinner/>
                </div>
            )}
            {status === 'success' && (
                <div className="flex flex-row flex-wrap justify-center items-center m-3">
                    {listProducts!.map((product) => (
                        <VignetteProduit key={product.id} product={product} />
                    ))}
                </div>
            )}

        </div>
    );

}

export default Home; 