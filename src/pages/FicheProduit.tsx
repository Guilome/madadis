import {useEffect, useState} from "react";
import type {Product, Review} from "../services/type.ts";
import apiService from "../services/serviceAPI.ts";
import Spinner from "../components/Spinner.tsx";
import {useParams} from "react-router-dom";
import Rating from "../components/Rating.tsx";
import Stock from "../components/Stock.tsx";
import Avis from "../components/Avis.tsx";
import Accordion from "../components/Accordion.tsx";

const DetailProduit = () => {

    const {id} = useParams();

    const [quantity, setQuantity] = useState(0);
    const [product, setProduct] = useState<Product>();
    const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
    const [error, setError] = useState<Error>();

    useEffect(() => {
        setStatus('pending');
        apiService.productService.getProduct(id!)
            .then((response: any) => {
                setProduct(response);
                setStatus('success');
            })
            .catch((e: any) => {
                setStatus('error');
                setError(e);
            });
    }, []);

    const setStock = (stock: number)=> {
        setQuantity(stock);
        console.log(quantity);
    };
    if (status === 'pending') return <div><Spinner/></div>;
    if (status === 'error') return <h1>Error ! {error?.message}</h1>;
    if (status === 'success') {
        return (
            <div className="flex flex-col w-full m-6">
                <div className="flex flex-row">
                    <div className="flex flex-row justify-center flex-wrap w-1/2">
                        {product!.images.map((image: any) => (
                            <img className="w-1/2 h-auto" src={image} alt="test"/>
                        ))}
                    </div>
                    <div className="flex flex-col justify-start content-center w-1/2">
                        <h1 className="text-blue-950 text-4xl">{product!.title}</h1>
                        <p className="text-xs underline">Reference : {product!.sku}</p>
                        <div className="flex flex-row flex-wrap justify-evenly">
                            <p>{product!.category}</p>
                            <p>{product!.brand}</p>
                        </div>
                        <div className="flex flex-row flex-wrap justify-evenly">
                            <p>{product!.price}</p>
                            <p>{product!.discountPercentage}</p>
                            <Rating note={product!.rating} /><p>{product!.rating}</p>
                        </div>
                        <div className="flex flex-col items-center text-center border-2 border-sky-950 rounded-full p-4 m-6 bg-sky-950">
                            <Accordion items={{title: "Description"; children: {product!.description}}} />
                            <h2 className="text-xl text-blue-300">Description</h2>
                            <p className="text-blue-50">{product!.description}</p>
                        </div>
                        <div className="flex flex-row flex-wrap justify-evenly">
                            <Stock quantiteInitiale={product!.stock} onChangeStock={setStock} />
                            <button className="bg-sky-500 rounded-2xl text-sky-50 px-2" onClick={() => console.log("Add to cart")}>Ajouter au panier</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex flex-row flex-wrap justify-evenly w-full">
                        {product!.reviews.map((review: Review) => (
                            <Avis review={review} />
                        ))}
                    </div>
                    <button className="bg-sky-500 rounded-2xl text-sky-50 px-2 w-1/5" onClick={() => console.log("Add Review")}>Laisser un avis</button>
                </div>
                <div className="flex flex-row">

                </div>
                <div className="flex flex-row">

                </div>
                <div className="flex flex-row">

                </div>
            </div>
        );
    }
};

export default DetailProduit;