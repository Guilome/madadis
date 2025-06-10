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
                        justify-center
                        m-3
                        p-2
                        lg:m-6
                        lg:p-4
                        rounded-4xl
                        border-solid
                        border-2
                        border-sky-500
                        h-[200px]
                        w-[260px]
                        md:w-[290px]
                        md:h-[360px]
                        lg:w-[300px]
                        lg:h-[405px]
                        hover:bg-sky-200
                        hover:cursor-pointer
                        hover:scale-105">
            <div className="absolute -top-6 -right-6 bg-sky-500 text-sky-50 font-bold text-l px-4 py-2 rounded-full z-10">{product.discountPercentage}%</div>
            <h2 className="text-blue-900 font-bold md:text-lg max-md:text-l">{product.title}</h2>
            <img className="md:h-[250px] md:w-[250px] max-md:h-[100px] md:w-[100px]" src={product.images[0]} alt={product.title}/>
            <div className="flex justify-end items-center w-full">
                <p className="text-blue-900 font-medium text-xs line-through mr-2">{calculPrixInitial(product.price, product.discountPercentage)}€</p>
                <p className="text-blue-900 font-medium md:text-2xl">{product.price}€</p>
            </div>
        </div>
    );
};

export default VignetteProduit;