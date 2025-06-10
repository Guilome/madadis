import type {Product} from "../services/type.ts";
import Spinner from "./Spinner.tsx";
import {useNavigate} from "react-router-dom";

const ResultatRecherche = (props: {listProduit: Product[], status: string, erreur: any}) => {

    const navigate = useNavigate();
    const listProduits = props.listProduit;

    const goToDetail = (produitId: string) => {
        navigate(`/produit/${produitId}`);
    }

    if (props.status === 'error') return <h1>Error !</h1>;
    if (props.status === 'pending') {
        return <div className="flex justify-center items-center">
            <Spinner/>
        </div>;
    }
    if (props.status === 'success') {
        return (
            <div className={`absolute z-50 left-1/4 bg-sky-50 mt-2 flex flex-col rounded-2xl border-2 border-sky-500 w-2/3 ${listProduits.length > 5 ? 'max-h-50 overflow-y-auto' : ''}`}>
                {listProduits.length === 0 && <p className="text-gray-500">Aucun résultat trouvé.</p>}
                {listProduits.length > 0 && listProduits!.map((product: Product) => (
                    <div className="flex flex-row items-center justify-start hover:cursor-pointer"
                         onClick={() => goToDetail(product.id)}>
                        <img className="h-[100px] w-[100px]" src={product.images[0]} alt={product.title}/>
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                    </div>
                ))}
            </div>
        );
    }
};

export default ResultatRecherche;