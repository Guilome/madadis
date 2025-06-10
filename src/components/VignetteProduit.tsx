import type {Product} from "../services/type.ts";
import {useNavigate} from "react-router-dom";

const VignetteProduit = (props: { product: Product }) => {
    const navigate = useNavigate();
    const product: Product = props.product;

    const goToDetail = (produitId: string) => {
        navigate(`/produit/${produitId}`);
    }

    const calculPrixInitial = (prix: number, reduction: number) => {
        const prixInitial = (prix / (1 - (reduction/100)));
        return prixInitial.toFixed(2);
    }

    return (
        <div onClick={() => goToDetail(product.id)} className="flex
                        relative
                        flex-col
                        flex-wrap
                        content-center
                        items-center
                        m-6
                        p-4
                        rounded-4xl
                        border-solid
                        border-2
                        border-sky-500
                        min-h-1/6
                        min-w-1/5
                        hover:bg-sky-200
                        hover:cursor-pointer
                        hover:scale-105">
            <div className="absolute -top-6 -right-6 bg-sky-500 text-sky-50 font-bold text-l px-4 py-2 rounded-full z-10">{product.discountPercentage}%</div>
            <h2 className="text-blue-900 font-bold text-lg">{product.title}</h2>
            <img className="h-[250px] w-[250px]" src={product.images[0]} alt={product.title}/>
            <div className="flex justify-end items-center w-[100%]">
                <p className="text-blue-900 font-medium text-xs line-through mr-2">{calculPrixInitial(product.price, product.discountPercentage)}€</p>
                <p className="text-blue-900 font-medium text-2xl">{product.price}€</p>
            </div>
        </div>
    );
};

export default VignetteProduit;