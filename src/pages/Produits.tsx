import apiService from "../services/serviceAPI.ts";
import {useEffect, useState} from "react";
import type {Product} from "../services/type.ts";
import VignetteProduit from "../components/VignetteProduit.tsx";
import Spinner from "../components/Spinner.tsx";

function Produits() {

    const [listProducts, setProducts] = useState<Product[]>();
    const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
    const [error, setError] = useState<Error>();

    useEffect(() => {
        setStatus('pending');
        setTimeout(() => {}, 5000);
        apiService.productService.getAllProducts(25)
            .then((response: any) => {
                setProducts(response.products);
                setStatus('success');
            })
            .catch((e: any) => {
                setStatus('error');
                setError(e);
            });
    }, []);
    if (status === 'pending') return <div className="w-1/3 h-1/3"><Spinner/></div>;
    if (status === 'error') return <h1>Error ! {error?.message}</h1>;
    if (status === 'success') {
        return (
            <div className="flex flex-row flex-wrap justify-center items-center m-6">
                {listProducts!.map((product) => (
                    <VignetteProduit key={product.id} product={product} />
                ))}
            </div>
        );
    }
}

export default Produits;