import apiService from "../services/serviceAPI.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {useEffect, useState} from "react";
import type {Product} from "../services/type.ts";
import ResultatRecherche from "./ResultatRecherche.tsx";
import {useLocation} from "react-router-dom";

function SearchInput() {

    const location = useLocation();

    const [searchTerm, setSearchTerm] = useState('');
    const [listProducts, setProducts] = useState<Product[]>([]);
    const [status, setStatus] = useState<'idle' |'pending' | 'success' | 'error'>('idle');
    const [error, setError] = useState<Error>();

    useEffect(() => {
        setSearchTerm('');
        setProducts([]);
        setStatus('idle');
    }, [location.pathname]);

    useEffect(() => {
        if (searchTerm.length < 3) {
            setStatus('idle');
            return;
        }

        const delayDebounce = setTimeout(() => {
            setStatus('pending');
            apiService.productService.searchProduct(searchTerm)
                .then((response: any) => {
                    setProducts(response.products);
                    setStatus('success');
                })
                .catch((e: any) => {
                    setStatus('error');
                    setError(e);
                });
        },1000);
        return () => clearTimeout(delayDebounce);
    }, [searchTerm]);

    return (
        <div>
            <div className="flex border-1 border-solid border-sky-500 rounded-4xl overflow-hidden bg-sky-50 w-[300px] h-10 px-4 m-2">
                <input className="grow border-none outline-none bg-transparent text-lg w-full h-full" type="text"
                       placeholder="Recherche"
                       value={searchTerm}
                       onChange={e => setSearchTerm(e.target.value)} />
                <FontAwesomeIcon className="text-lg text-sky-500 self-center" icon={faMagnifyingGlass} />
            </div>
            {status !== 'idle' && (
                <ResultatRecherche listProduit={listProducts} status={status} erreur={error} />
            )}
        </div>
    );
}

export default SearchInput;
