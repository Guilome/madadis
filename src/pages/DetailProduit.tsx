import {useEffect, useState} from "react";
import type {Product} from "../services/type.ts";
import apiService from "../services/serviceAPI.ts";
import Spinner from "../components/Spinner.tsx";

const DetailProduit = (props: { id: string }) => {
    const idProduct = props.id;

    const [product, setProduct] = useState<Product>();
    const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
    const [error, setError] = useState<Error>();

    useEffect(() => {
        setStatus('pending');
        apiService.productService.getProduct(idProduct)
            .then((response: any) => {
                setProduct(response);
                setStatus('success');
            })
            .catch((e: any) => {
                setStatus('error');
                setError(e);
            });
    }, []);
    if (status === 'pending') return <div><Spinner/></div>;
    if (status === 'error') return <h1>Error ! {error?.message}</h1>;
    if (status === 'success') {
        return (
            <div>
                {product?.title}
            </div>
        );
    }
};

export default DetailProduit;