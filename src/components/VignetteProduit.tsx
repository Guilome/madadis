import type {Product} from "../services/type.ts";

const VignetteProduit = (props: { product: Product }) => {
    const product: Product = props.product;

    return (
        <div className="flex flex-col flex-wrap content-center items-center m-3 p-3 rounded-4xl border-solid border-2 border-sky-500 h-1/6 w-1/5">
            <h2 className="text-blue-900 font-bold text-lg">{product.title}</h2>
            <img className="h-[250px] w-[250px]" src={product.images[0]} alt={product.title}/>
            <div className="flex justify-end items-center w-[100%]">
                <p className="text-blue-900 font-medium text-2xl">{product.price}€</p>
            </div>
        </div>
    );
};

export default VignetteProduit;