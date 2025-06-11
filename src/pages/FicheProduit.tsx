import {useEffect, useState} from "react";
import type {Detail, ImageGalerie, Product, Review} from "../services/type.ts";
import apiService from "../services/serviceAPI.ts";
import Spinner from "../components/Spinner.tsx";
import {useParams} from "react-router-dom";
import Rating from "../components/Rating.tsx";
import Stock from "../components/Stock.tsx";
import Avis from "../components/Avis.tsx";
import Accordion from "../components/Accordion.tsx";
import DetailsProduit from "../components/DetailsProduit.tsx";
import setDetail from "../services/SetObjects.ts";
import {useCart} from "../services/CartContext.tsx";
import GalerieProduit from "../components/GalerieProduit.tsx";
import BadgeStock from "../components/BadgeStock.tsx";

const FicheProduit = () => {

    const {id} = useParams();
    const { addToCart } = useCart();
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

    const calculPrixInitial = (prix: number, reduction: number) => {
        const prixInitial = (prix / (1 - (reduction/100)));
        return prixInitial.toFixed(2);
    }

    if (status === 'pending') return <div><Spinner/></div>;
    if (status === 'error') return <h1>Error ! {error?.message}</h1>;
    if (status === 'success') {

        let detail: Detail = setDetail(product!);

        const setStock = (stock: number)=> {
            setQuantity(stock);
        };

        const accordionItems = [
            { title: 'Description', content: product!.description },
            { title: 'Détails', content: <DetailsProduit details={detail} /> },
        ];

        const galerieImage: ImageGalerie[] = [];

        product!.images.forEach((image: string, index: number) => {
            galerieImage.push({id: index, alt:`vue-${index}`,src: image})
        })

        return (
            <div className="flex flex-col justify-center content-center items-center w-full lg:m-6 md:m-4 max-md:m-2">
                <h1 className="text-blue-950 text-4xl">{product!.title}</h1>
                <h1 className="text-blue-950 text-2xl">(Lot de {product!.minimumOrderQuantity})</h1>
                <p className="text-xs underline">Reference : {product!.sku}</p>
                <p className="text-blue-900 font-medium text-l">Prix à l'unité : {product!.price}€</p>
                <div className="flex flex-row flex-wrap justify-evenly">
                    <div className="flex flex-row justify-center content-center flex-1/2">
                        <GalerieProduit images={galerieImage} />
                    </div>
                    <div className="flex flex-col justify-start content-center flex-1/2">
                        <div className="flex flex-row flex-wrap justify-evenly lg:m-6 md:m-4 max-md:m-2">
                            <div className="flex flex-row flex-wrap justify-evenly items-center lg:m-6 md:m-4 max-md:m-2">
                                <div className="flex relative flex-row flex-wrap justify-evenly lg:m-6 md:m-4 max-md:m-2">
                                    <p className="text-blue-900 font-medium line-through max-md:text-l md:text-xl lg:text-2xl">
                                        {calculPrixInitial((product!.price * product!.minimumOrderQuantity), product!.discountPercentage)}€
                                    </p>
                                    <p className="text-blue-900 font-medium max-md:text-2xl md:text-4xl lg:text-6xl">{(product!.price * product!.minimumOrderQuantity).toFixed(2)} €</p>
                                    <div className="absolute -top-8 -right-6 bg-sky-500 text-sky-50 font-bold px-4 py-2 rounded-full z-10 md:text-s max-md:text-xs">
                                        {product!.discountPercentage}%
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap justify-center items-center lg:m-6 md:m-4 max-md:m-2">
                                <p className="text-blue-900 font-medium text-2xl mr-2">Notes : {product!.rating} / 5</p><Rating note={product!.rating} />
                            </div>
                        </div>
                        <div className="w-full min-w-0">
                            <Accordion items={accordionItems} />
                        </div>
                        <div className="flex flex-row flex-wrap justify-evenly items-center m-8">
                            <Stock key={product!.id} quantiteInitiale={product!.stock/product!.minimumOrderQuantity} onChangeStock={setStock} />
                            <BadgeStock statutStock={product!.availabilityStatus} />
                            <button className="bg-sky-500 rounded-2xl text-sky-50 p-2 w-1/2 lg:m-6 md:m-4 max-md:m-2 hover:cursor-pointer" onClick={() => addToCart(product!, quantity)}>
                                Ajouter au panier
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-wrap justify-evenly items-end w-full">
                    <div className="flex flex-row flex-wrap justify-evenly w-full">
                        {product!.reviews.map((review: Review, index :number) => (
                            <Avis key={index} review={review} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default FicheProduit;